import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <div>
            <footer>
                <nav>
                    <div className="icon-footer">
                        <a href="https://twitter.com/MonolithCrypto">
                            <FontAwesomeIcon icon={faTwitter} inverse  size="2x"></FontAwesomeIcon>
                        </a>
                        <a href="https://www.instagram.com/monolith.crypto/">
                            <FontAwesomeIcon icon={faInstagram} inverse  size="2x" ></FontAwesomeIcon>
                        </a>
                        <a href="https://discord.gg/4guJ9kEHH2">
                            <FontAwesomeIcon icon={faDiscord} inverse size="2x"></FontAwesomeIcon>
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    )
}