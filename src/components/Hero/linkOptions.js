const options = (isMobile = false) => ({
    fullScreen: {
        enable: false
    },
    particles: {
        links: {
            enable: true,
            color: "#2b8a9d"
        },
        color: {
            value: "#2b8a9d"
        },
        move: {
            enable: true
        },
        number: {
            value: isMobile ? '50' : '150',
        },
        opacity: {
            value: { min: 0.3, max: 1 }
        },
        shape: {
            type: ["circle", "square", "triangle", "polygon"],
            options: {
                polygon: [
                    {
                        sides: 5
                    },
                    {
                        sides: 6
                    },
                    {
                        sides: 8
                    }
                ]
            }
        },
        size: {
            value: { min: 1, max: 3 }
        }
    },
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: 'repulse',
            },
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 80,
                duration: 0.4,
            },
        },
    },
});

export default options;