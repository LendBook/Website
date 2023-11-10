import React from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';


const App = () => {
    const [showLogo, setShowLogo] = React.useState(false);
    const [showTitle, setShowTitle] = React.useState(false);
    const [showText, setShowText] = React.useState(false);
    const [showTwitter, setShowTwitter] = React.useState(false);
    const [showDiscord, setShowDiscord] = React.useState(false);
    const [showGithub, setShowGithub] = React.useState(false);
    const [showEmail, setShowEmail] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => setShowLogo(true), 500);
        setTimeout(() => setShowTitle(true), 1500);
        setTimeout(() => setShowText(true), 2000);
        setTimeout(() => setShowTwitter(true), 2500);
        setTimeout(() => setShowDiscord(true), 3000);
        setTimeout(() => setShowGithub(true), 3500);
        setTimeout(() => setShowEmail(true), 4000);
    }, []);

    const logoProps = useSpring({
        opacity: showLogo ? 1 : 0,
        from: { opacity: 0 },
        config: { duration: 500 },
    });

    const titleProps = useSpring({
        opacity: showTitle ? 1 : 0,
        from: { opacity: 0 },
        config: { duration: 500 },
    });

    const textProps = useSpring({
        opacity: showText ? 1 : 0,
        from: { opacity: 0 },
        config: { duration: 500 },
    });

    const twitterProps = useSpring({
        opacity: showTwitter ? 1 : 0,
        from: { opacity: 0 },
        config: { duration: 500 },
    });

    const discordProps = useSpring({
        opacity: showDiscord ? 1 : 0,
        from: { opacity: 0 },
        config: { duration: 500 },
    });

    const githubProps = useSpring({
        opacity: showGithub ? 1 : 0,
        from: { opacity: 0 },
        config: { duration: 500 },
    });

    const emailProps = useSpring({
        opacity: showEmail? 1 : 0,
        from: { opacity: 0 },
        config: { duration: 500 },
    });

    return (
        <div className="app-container">
            <div className="background"></div>
            <animated.div style={logoProps}>
                <img
                    className="logo"
                    src="lendbook.png"
                    alt="Logo"
                />
            </animated.div>
            <animated.div style={titleProps}>
                <h1 className="title">Lendbook</h1>
            </animated.div>
            <div className="social-icons">
                <a href="https://twitter.com/lend_book" target="_blank" rel="noopener noreferrer">
                    <animated.img
                        className="icon twitter"
                        style={twitterProps}
                        src="twitter.png"
                        alt="Twitter"
                    />
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                    <animated.img
                        className="icon discord"
                        style={discordProps}
                        src="discord.png"
                        alt="Discord"
                    />
                </a>
                <a href="https://github.com/LendBook" target="_blank" rel="noopener noreferrer">
                    <animated.img
                        className="icon github"
                        style={githubProps}
                        src="github.png"
                        alt="GitHub"
                    />
                </a>
                <a href="mailto:hello@lendbook.io" target="_blank" rel="noopener noreferrer">
                    <animated.img
                        className="icon mail"
                        style={emailProps}
                        src="email.png"
                        alt="Email"
                    />
                </a>
            </div>
        </div>
    );
};

export default App;
