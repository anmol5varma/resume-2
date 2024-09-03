import ReactGA4 from 'react-ga4';

ReactGA4.initialize(process.env.REACT_APP_TRACKING_ID); // Replace with your Measurement ID

export const handlePageView = (platform) => {
    ReactGA4.send({ hitType: "pageview", page: "/", title: "Home", platform });
}

export const trackScroll = () => {
    const scrollPosition = window.scrollY;
    const event = {
        category: "user_interaction",
        action: "scrolled",
        label: "scroll_depth", // optional
        value: scrollPosition, // optional, must be a number
    }
    ReactGA4.event(event);
};

export const handleButtonClick = (label) => {
    const event = {
        category: "button",
        action: "clicked",
        label: `${label}_button_click`, // optional
    }
    ReactGA4.event(event);
};

export const handleSocialClick = (network) => {
    const event = {
        category: "social_engagement",
        action: "clicked",
        label: `${network}_social_click`, // optional
    }
    ReactGA4.event(event);
};

export const handlePageUnload = (pageStartTime) => {
    const timeOnPage = Date.now() - pageStartTime;
    const event = {
        category: "user_engagement",
        action: "spent",
        number: timeOnPage,
        label: "time_on_page", // optional
    }
    ReactGA4.event(event);
};