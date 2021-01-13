import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import ButtonSlide from "../components/ButtonSlide";
import Box from "../components/Box";
import Faq from "../components/Faq";
import React, { useRef, useState } from "react";
import { useEmblaCarousel } from "embla-carousel/react";

export default function Home() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [open, setOpen] = useState(false);
    const [chosen, setChosen] = useState();
    const email = useRef();
    const [message, setMessage] = useState();

    const text = [
        {
            title: "Simple Bookmarking"
        },
        { title: " Speedy Searching" },
        { title: "Easy Sharing" }
    ];

    return (
        <div className={styles.main_wrap}>
            <Head>
                <title>Frontend Mentor | Bookmark landing page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.header}>
                <div
                    className={`${styles.navigation} ${
                        open ? styles.menu_open : null
                    }`}
                >
                    {!open ? (
                        <div>
                            <img src="/images/logo-bookmark.svg" alt="logo" />
                        </div>
                    ) : (
                        <div className={styles.logo}>
                            <svg
                                width="148"
                                height="25"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g fill="none" fill-rule="evenodd">
                                    <path
                                        d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z"
                                        fill="#242A45"
                                        fill-rule="nonzero"
                                    />
                                    <g>
                                        <circle
                                            fill="#5267DF"
                                            cx="12.5"
                                            cy="12.5"
                                            r="12.5"
                                        />
                                        <path
                                            d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z"
                                            fill="#FFF"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    )}

                    <div className={styles.link_desktop}>
                        <a href="#"> FEATURES</a>
                        <a href="#"> PRICING</a>
                        <a href="#"> CONTACT</a>

                        <button
                            type="button"
                            title="button"
                            className={styles.login_desktop}
                        >
                            LOGIN
                        </button>
                    </div>

                    <button
                        type="button"
                        title="button"
                        className={styles.hamburger}
                        onClick={() => setOpen(!open)}
                    >
                        {!open ? (
                            <img
                                src="/images/icon-hamburger.svg"
                                alt="hamburger"
                            />
                        ) : (
                            <img src="/images/icon-close.svg" alt="close" />
                        )}
                    </button>
                    {open ? (
                        <div className={styles.link_mobile}>
                            <a href="#"> FEATURES</a>
                            <a href="#"> PRICING</a>
                            <a href="#"> CONTACT</a>
                            <hr className={styles.break_line}></hr>
                            <button
                                type="button"
                                title="button"
                                className={styles.login_mobile}
                            >
                                LOGIN
                            </button>
                            <div className={styles.social_mobile}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                >
                                    <path
                                        fill="#FFF"
                                        fill-rule="evenodd"
                                        d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                                    />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="20"
                                >
                                    <path
                                        fill="#FFF"
                                        fill-rule="evenodd"
                                        d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"
                                    />
                                </svg>
                            </div>
                        </div>
                    ) : null}
                </div>

                <div className={styles.container}>
                    <div className={styles.picture_wrap}>
                        <img
                            src="/images/illustration-hero.svg"
                            alt="picture"
                            className={styles.picture}
                        />
                    </div>

                    <div className={styles.header_info}>
                        <Header type="primary">
                            A Simple Bookmark Manager
                        </Header>

                        <Paragraph type="primary">
                            A clean and simple interface to organize your
                            favourite websites. Open a new browser tab and see
                            your sites load instantly. Try it for free.
                        </Paragraph>

                        <div className={styles.button_wrap}>
                            <Button color="blue" size="med">
                                Get it on Chrome
                            </Button>
                            <Button color="white" size="med">
                                Get it on Firefox
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.shape}></div>

            <div className={styles.details_wrap}>
                <Header type="secondary">Features</Header>

                <Paragraph type="secondary">
                    Our aim is to make it quick and easy for you to access your
                    favourite websites. Your bookmarks sync between your devices
                    so you can access them on the go.
                </Paragraph>
            </div>

            <div className={styles.slide_buttonwrap}>
                {text.map((name, index) => (
                    <ButtonSlide
                        name={name}
                        position={chosen === index}
                        onClick={() => {
                            emblaApi.scrollTo(index);
                            setChosen(index);
                        }}
                    />
                ))}
            </div>

            <div className={styles.viewportCss} ref={emblaRef}>
                <div className={styles.containerCss}>
                    <div className={styles.slideCss}>
                        <div className={styles.slide_container}>
                            <div className={styles.slide_picture}>
                                <img
                                    src="/images/illustration-features-tab-1.svg"
                                    alt="picture1"
                                    className={styles.picture}
                                />
                            </div>
                            <div className={styles.slide_info}>
                                <Header type="secondary">
                                    Bookmark in one click
                                </Header>

                                <Paragraph type="secondary">
                                    Organize your bookmarks however you like.
                                    Our simple drag-and-drop interface gives you
                                    complete control over how you manage your
                                    favourite sites.
                                </Paragraph>
                                <Button color="blue" size="small">
                                    More Info
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.slideCss}>
                        <div className={styles.slide_container}>
                            <div className={styles.slide_picture}>
                                <img
                                    src="/images/illustration-features-tab-2.svg"
                                    alt="picture2"
                                    className={styles.picture}
                                />
                            </div>
                            <div className={styles.slide_info}>
                                <Header type="secondary">
                                    Intelligent search
                                </Header>

                                <Paragraph type="secondary">
                                    Our powerful search feature will help you
                                    find saved sites in no time at all. No need
                                    to trawl through all of your bookmarks.
                                </Paragraph>
                                <Button color="blue" size="small">
                                    More Info
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.slideCss}>
                        <div className={styles.slide_container}>
                            <div className={styles.slide_picture}>
                                <img
                                    src="/images/illustration-features-tab-3.svg"
                                    alt="picture3"
                                    className={styles.picture}
                                />
                            </div>
                            <div className={styles.slide_info}>
                                <Header type="secondary">
                                    Share your bookmarks
                                </Header>

                                <Paragraph type="secondary">
                                    Easily share your bookmarks and collections
                                    with others. Create a shareable link that
                                    you can send at the click of a button.
                                </Paragraph>
                                <Button color="blue" size="small">
                                    More Info
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.shape_left}></div>

            <div className={styles.details_wrap}>
                <Header type="secondary">Download the extension</Header>

                <Paragraph type="secondary">
                    We’ve got more browsers in the pipeline. Please do let us
                    know if you’ve got a favourite you’d like us to prioritize.
                </Paragraph>
            </div>

            <div className={styles.box_wrap}>
                <Box
                    margin="left"
                    logo={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="102"
                            height="100"
                        >
                            <g fill="none">
                                <path
                                    fill="#E16B5A"
                                    d="M50.768.01s30.01-1.325 45.916 28.249H48.217s-9.154-.296-16.957 10.594c-2.25 4.561-4.65 9.27-1.95 18.538-3.9-6.472-20.708-35.164-20.708-35.164S20.457 1.186 50.768.009z"
                                />
                                <path
                                    fill="#FFD464"
                                    d="M95.122 75.095S81.284 101.238 47.21 99.952C51.414 92.82 71.45 58.8 71.45 58.8s4.837-7.626-.875-19.696c-2.903-4.192-11.7-8.586-21.237-10.928 7.67-.075 47.25.005 47.25.005s12.653 20.59-1.466 46.915z"
                                />
                                <path
                                    fill="#74B340"
                                    d="M6.628 75.294s-16.17-24.825 2.004-53.116l24.225 41.163s4.314 7.92 17.832 9.104c5.153-.368 10.514-.682 17.351-7.607C64.27 71.387 47.327 100 47.327 100s-24.51.448-40.7-24.706z"
                                />
                                <ellipse
                                    cx="50.646"
                                    cy="50.406"
                                    fill="#FFF"
                                    rx="23.064"
                                    ry="22.656"
                                />
                                <ellipse
                                    cx="50.638"
                                    cy="50.406"
                                    fill="#2995CC"
                                    rx="18.292"
                                    ry="17.969"
                                />
                                <path
                                    fill="#268CBF"
                                    d="M50.643 32.441c-.364 0-.724.014-1.082.034 9.598.55 17.209 8.369 17.209 17.934 0 9.568-7.611 17.386-17.21 17.937.36.02.72.034 1.083.034 10.101 0 18.292-8.046 18.292-17.97 0-9.923-8.19-17.969-18.292-17.969z"
                                />
                            </g>
                        </svg>
                    }
                    company="Add to Chrome"
                    version="Minimum version 62"
                />

                <Box
                    margin="center"
                    logo={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="105"
                            height="100"
                        >
                            <path
                                fill="#FF9800"
                                d="M105 50c0 28.862-23.513 50-52.5 50S0 76.588 0 47.726c0-9.043 2.33-17.59 6.392-25a.995.995 0 0 1 .23-.366C4.338 18.956 3.334 10.318 9.128 4.541c0 2.411 1.464 6.548 3.104 9.638 1.326 2.457 2.737 4.228 3.741 4 2.284-.543 10.27-.543 11.412 0 1.877-2.405 6.445-9.09 13.703-9.09-4.062 4.045-15.704 18.185 4.567 18.185h4.568L36.52 36.363s1.556 3 0 4.548c-1.732-1.732-9.128 1.862-9.128 6.815s5.296 11.363 15.98 11.363c10.683 0 7.986-4.548 13.696-4.548 5.709 0 6.844 4.548 6.844 4.548-7.855 0-13.558 9.09-22.824 9.09 4.567 3.364 7.58 4.547 13.696 4.547 15.113 0 27.392-12.225 27.392-27.274 0-6.09-2.008-11.683-5.388-16.224a27.414 27.414 0 0 1 10.96 19.498 40.554 40.554 0 0 0 1.279-10.089c0-13.683-5.84-31.776-15.98-38.637C87.655 4.358 105 18.466 105 45.452V50z"
                            />
                        </svg>
                    }
                    company="Add to Firefox"
                    version="Minimum version 55"
                />

                <Box
                    margin="right"
                    logo={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="96"
                            height="100"
                        >
                            <path
                                fill="#EB6060"
                                fill-rule="evenodd"
                                d="M48 100C21.49 100 0 77.614 0 50S21.49 0 48 0s48 22.386 48 50-21.49 50-48 50zm0-10c13.807 0 25-17.909 25-40S61.807 10 48 10 23 27.909 23 50s11.193 40 25 40z"
                            />
                        </svg>
                    }
                    company="Add to Opera"
                    version="Minimum version 46"
                />
            </div>

            <div className={styles.details_wrap}>
                <Header type="secondary">Frequently Asked Questions</Header>

                <Paragraph type="secondary">
                    Here are some of our FAQs. If you have any other questions
                    you’d like answered please feel free to email us.
                </Paragraph>

                <hr className={styles.divider}></hr>
                <div className={styles.faq}>
                    <Faq
                        question="
                    What is Bookmark? "
                        answer="
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                    justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
                    />

                    <Faq
                        question="
                    How can I request a new browser?"
                        answer="
                    Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                    Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                    ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                    Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
                    />

                    <Faq
                        question="
                    Is there a mobile app? "
                        answer="
                    Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                    urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                    sollicitudin ex et ultricies bibendum."
                    />

                    <Faq
                        question="
                    What about other Chromium browsers?"
                        answer="
                    Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                    vitae neque eget nisl gravida pellentesque non ut velit."
                    />
                </div>

                <Button color="blue" size="small">
                    More Info
                </Button>
            </div>

            <div className={styles.update_wrap}>
                <div className={styles.update}>
                    <p>35,000+ ALREADY JOINED</p>

                    <h3>Stay up-to-date with what we’re doing</h3>
                    <div className={styles.mail_wrap}>
                        <form
                            className={styles.form}
                            noValidate
                            onSubmit={e => {
                                const value = email.current.value;
                                const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
                                e.preventDefault();
                                console.log(email.current.value);
                                if (value === "") {
                                    return setMessage(
                                        "Whoops, make sure it's an email!!"
                                    );
                                }
                                if (!value.match(re)) {
                                    return setMessage(
                                        "Whoops, make sure it's an email!!"
                                    );
                                }
                                setMessage(undefined);
                            }}
                        >
                            <div
                                className={`${styles.wrap} ${
                                    message !== undefined
                                        ? styles.email_message
                                        : null
                                }`}
                            >
                                <input
                                    type="email"
                                    title="email"
                                    placeholder="Enter your email address"
                                    className={styles.email}
                                    ref={email}
                                    className={styles.email}
                                />

                                {message !== undefined ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                    >
                                        <g fill="none" fill-rule="evenodd">
                                            <circle
                                                cx="10"
                                                cy="10"
                                                r="10"
                                                fill="#FA5959"
                                            />
                                            <g
                                                fill="#FFF"
                                                transform="translate(9 5)"
                                            >
                                                <rect
                                                    width="2"
                                                    height="7"
                                                    rx="1"
                                                />
                                                <rect
                                                    width="2"
                                                    height="2"
                                                    y="8"
                                                    rx="1"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                ) : null}

                                {typeof message !== "undefined" ? (
                                    <p className={styles.text_color}>
                                        {message}
                                    </p>
                                ) : null}
                            </div>

                            <button
                                type="submit"
                                title="submit"
                                className={styles.red_button}
                            >
                                Contact Us
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <footer className={styles.footer}>
                <div className={styles.footer_wrap}>
                    <div className={styles.logo}>
                        <svg
                            width="148"
                            height="25"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g fill="none" fill-rule="evenodd">
                                <path
                                    d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z"
                                    fill="#242A45"
                                    fill-rule="nonzero"
                                />
                                <g>
                                    <circle
                                        fill="#5267DF"
                                        cx="12.5"
                                        cy="12.5"
                                        r="12.5"
                                    />
                                    <path
                                        d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z"
                                        fill="#FFF"
                                    />
                                </g>
                            </g>
                        </svg>
                    </div>

                    <div className={styles.contact}>
                        <a href="#">Features</a>
                        <a href="#"> Pricing</a>
                        <a href="#">Contact</a>
                    </div>

                    <div className={styles.social}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                        >
                            <path
                                fill="#FFF"
                                fill-rule="evenodd"
                                d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="20"
                        >
                            <path
                                fill="#FFF"
                                fill-rule="evenodd"
                                d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"
                            />
                        </svg>
                    </div>
                </div>

                <p className={styles.attribution}>
                    Challenge by{" "}
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                    >
                        Frontend Mentor
                    </a>
                    . Coded by <a href="#">Andro87</a>.
                </p>
            </footer>
        </div>
    );
}
