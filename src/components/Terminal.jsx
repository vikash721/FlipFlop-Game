import { useEffect, useRef, useState } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";


const TerminalComponent = () => {
  const terminalRef = useRef(null);
  const [term, setTerm] = useState(null);
  let command = "";
  let menuIndex = 0;
  let isInMenu = false;
  let menuStartRow = 0;
  let promptLength = 0;

  const menuOptions = ["About Me", "Projects", "Contact", "Exit"];

  useEffect(() => {
    const terminal = new Terminal({
      cursorBlink: true,
      fontSize: 16,
      fontFamily: "Consolas, 'Fira Code', 'Ubuntu Mono', 'Monaco', monospace",
      theme: {
        background: "#1a1a1f",
        foreground: "#c0c0c0",
        cursor: "#00ff00",
      },
      scrollback: 1000,
      convertEol: true,
      disableStdin: false,
    });

    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);

    const resizeTerminal = () => {
      if (terminalRef.current) {
        fitAddon.fit();
      }
    };

    if (terminalRef.current) {
      terminal.open(terminalRef.current);
      fitAddon.fit();
      printWelcomeMessage(terminal);
      printPrompt(terminal);
      window.addEventListener("resize", resizeTerminal);
    }

    terminal.onKey(({ key, domEvent }) => {
      const charCode = domEvent.keyCode;

      if (isInMenu) {
        handleMenuNavigation(terminal, charCode);
      } else {
        handleCommandInput(terminal, charCode, key);
      }

      // Prevent default behavior
      domEvent.preventDefault();
    });

    // Prevent default cursor movements
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
      }
    });

    setTerm(terminal);
    return () => {
      terminal.dispose();
      window.removeEventListener("resize", resizeTerminal);
    };
  }, []);

  const printWelcomeMessage = (term) => {
    const welcomeMessage = `
  \x1b[32m============================================\x1b[0m
  \x1b[36m  Welcome to Vikash's Portfolio Terminal!  \x1b[0m
  \x1b[32m============================================\x1b[0m
  
  \x1b[33mType 'help' to see available commands.\x1b[0m
  `;
    term.writeln(welcomeMessage);
  };
  

  const printPrompt = (term) => {
    const prompt = "\x1b[32mvikash@portfolio\x1b[0m:\x1b[34m~\x1b[0m$ ";
    term.write(prompt);
    promptLength = stripAnsi(prompt).length;
  };

  const stripAnsi = (str) => {
    return str.replace(/\x1b\[[0-9;]*m/g, '');
  };

  const processCommand = (term, command) => {
    term.write("\r\n"); 
    const trimmedCommand = command.trim().toLowerCase();
    switch (trimmedCommand) {
      case "help":
        term.write("\x1b[33mAvailable commands:\x1b[0m\n");
        term.write("  - \x1b[32mabout\x1b[0m   : Learn about me\n");
        term.write("  - \x1b[32mprojects\x1b[0m : See my projects\n");
        term.write("  - \x1b[32mcontact\x1b[0m  : Get in touch\n");
        term.write("  - \x1b[32mmenu\x1b[0m     : Open interactive menu\n");
        term.write("  - \x1b[32mclear\x1b[0m    : Clear the terminal\n");
        break;
      case "about":
        term.write("\x1b[32m[ About Me ]\x1b[0m\n");
        term.write("I am a web developer passionate about building interactive experiences.\n");
        break;
      case "projects":
        term.write("\x1b[34m[ My Projects ]\x1b[0m\n");
        term.write("- Portfolio Website\n");
        term.write("- Chatroom App\n");
        term.write("- Web3 Donation Platform\n");
        break;
      case "contact":
        term.write("\x1b[36m[ Contact Me ]\x1b[0m\n");
        term.write("📧  Email: vikashkumar355555@gmail.com\n");
        term.write("🔗  LinkedIn: https://www.linkedin.com/in/vikashkumar721/\n");
        term.write("🔗  Github: https://github.com/vikash721/\n");
        term.write("🔗  Instagram: https://www.instagram.com/vikasharma_16/\n");
       
        break;
    case "skills":
        term.write("\x1b[36m[ My skills ]\x1b[0m\n");
        term.write("React.js\n");
        term.write("Tailwind CSS\n");
        term.write("Advanced Javascript\n");
        term.write("Html\n");
        term.write("CSS\n");
        term.write("C/C++\n");
        term.write("Figma\n");
        term.write("git/github\n");
        term.write("Firebase\n");
        term.write("Ether.js\n");
        break;
    
        case "e":
            term.write("\x1b[35m[ Education ]\x1b[0m\n");
            term.write("\x1b[32mB.Tech in Computer Science & Engineering\x1b[0m\n");
            term.write("SDIET (Satyug Darshan Institute of Engineering & Technology)\n");
            term.write("📅  Year: 2023 - 2027\n");
            term.write("📍  Location: Faridabad, Haryana\n");
            term.write("\n\x1b[36mRelevant Coursework:\x1b[0m\n");
            term.write("- Data Structures & Algorithms\n");
            term.write("- Web Development (React.js, Tailwind CSS)\n");
            term.write("- Database Management (SQL, Firebase)\n");
            term.write("- Blockchain & Web3 (Ether.js, Smart Contracts)\n");
            term.write("- UI/UX Design (Figma)\n");
            term.write("\n\x1b[33mAchievements:\x1b[0m\n");
            term.write("🏆  Built a college event management system (SDIETTechies)\n");
            term.write("🏆  Got 1st Rank in project showcase @SDIET\n");
            term.write("🏆  Developed CertifyMe a Web3-based Certificate verification platform \n");
            term.write("\n");
            break;
          
      case "menu":
        enterMenuMode(term);
        return;
      case "clear":
        term.clear();
        printWelcomeMessage(term);
        printPrompt(term);
        return;
      default:
        term.write(`\x1b[31mCommand not found:\x1b[0m ${trimmedCommand}\n`);
    }
    printPrompt(term);
  };

  const handleCommandInput = (term, charCode, key) => {
    if (charCode === 13) { // Enter key
      term.write("\r\n");
      processCommand(term, command);
      command = "";
    } else if (charCode === 8) { // Backspace key
      if (command.length > 0) {
        command = command.slice(0, -1);
        term.write("\b \b");
      }
    } else if (charCode >= 32 && charCode <= 126) { // Visible characters
      command += key;
      term.write(key);
    }
  };

  const enterMenuMode = (term) => {
    isInMenu = true;
    menuIndex = 0;
    term.write("\r\n\x1b[33m[ Use ↑/↓ to navigate, ENTER to select, ESC to exit ]\x1b[0m\r\n");
    menuStartRow = term.buffer.active.cursorY + 1;
    displayMenu(term);
  };

  const displayMenu = (term) => {
    term.write("\x1b7"); // Save cursor position
    term.write(`\x1b[${menuStartRow};1H`); // Move cursor to the start row of the menu
    menuOptions.forEach((option, index) => {
      if (index === menuIndex) {
        term.write(`\x1b[42m\x1b[30m ${option} \x1b[0m\r\n`);
      } else {
        term.write(` ${option} \r\n`);
      }
    });
    term.write("\x1b8"); // Restore cursor position
  };

  const handleMenuNavigation = (term, charCode) => {
    if (charCode === 38) { // Up arrow key
      menuIndex = (menuIndex - 1 + menuOptions.length) % menuOptions.length;
    } else if (charCode === 40) { // Down arrow key
      menuIndex = (menuIndex + 1) % menuOptions.length;
    } else if (charCode === 13) { // Enter key
      term.write(`\r\n\x1b[32m[ Selected: ${menuOptions[menuIndex]} ]\x1b[0m\r\n`);
      executeMenuSelection(term, menuIndex);
      isInMenu = false;
      return;
    } else if (charCode === 27) { // Escape key
      isInMenu = false;
      term.write("\r\n\x1b[31m[ Menu closed ]\x1b[0m\r\n");
      printPrompt(term);
      return;
    }
    displayMenu(term);
  };

  const executeMenuSelection = (term, index) => {
    switch (index) {
      case 0:
        processCommand(term, "about");
        break;
      case 1:
        processCommand(term, "projects");
        break;
      case 2:
        processCommand(term, "contact");
        break;
      case 3:
        term.write("\x1b[31mExiting...\x1b[0m\r\n");
        setTimeout(() => {
          term.clear();
          printWelcomeMessage(term);
          printPrompt(term);
        }, 1000);
        break;
    }
  };

  return (
    <div 
      ref={terminalRef} 
      className="h-full w-full p-2 terminal-container rounded-md flex flex-col"
    />
  );
  
};

export default TerminalComponent;