import {useState} from "react";
import "./App.css";
import logo from "./ourteamicon.png";

import avax from "./cryptologos/avax.png"
import btc from "./cryptologos/btc.png"
import eth from "./cryptologos/eth.png"
import luna from "./cryptologos/luna.png"
import dot from "./cryptologos/polkadot.png"
import sand from "./cryptologos/sand.png"
import sol from "./cryptologos/sol.png"


function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
        console.log(index)
    };

    return (
        <div className="container">


            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    about
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    portfolio
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    invest
                </button>
              <button
                  className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(4)}
              >
                our team
              </button>
              <button
                  className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(5)}
              >
                legal
              </button>


            </div>


            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <p>
                        Monolith is a cryptoasset investment fund. Our investment process is as
                        simple as it gets, with capital being invested in all aspects of blockchain,
                        such as cryptocurrencies, and products built on blockchain, like NFTs.
                    </p>
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <div className="crypto-logo-container">
                    <img src={avax} className="crypto-logo"/>
                    <img src={btc} className="crypto-logo"/>
                    <img src={eth} className="crypto-logo"/>
                    <img src={luna} className="crypto-logo"/>
                    <img src={dot} className="crypto-logo"/>
                    <img src={sand} className="crypto-logo"/>
                    <img src={sol} className="crypto-logo"/>
                    </div>
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <p>
                        If you are interested in joining the Monolith family, send us an email at:
                    </p>
                    <br/><br/><br/>
                        <p>monolith.crypto@gmail.com</p>
                </div>
                <div
                    className={toggleState === 4 ? "content  active-content" : "content"}
                >
                    <div className="our-team">



                    <img src={logo} className="our-team-icons"/>
                    <h2>Eliot Miailhe</h2>
                    <p>
                        Eliot has successfully privately managed cryptocurrencies, utilizing a variety of traditional finance strategies,
                        from Modern Portfolio Theory to hedging exposure with derivatives. Eliot specializes in Layer 1 protocols, through on-chain data.
                        He studies accounting and finance at King’s College London and is Head of Research at the King’s Hedge Fund Society.
                    </p><br/>
                    </div>
                        <div className="our-team">
                    <img src={logo} className="our-team-icons"/>
                    <h2>Dario Rizzuto</h2>
                    <p>
                        Dario first became engaged with cryptocurrencies in 2016 when he built an Ethereum mining computer.
                        Using the crypto it generated, he invested in his first NFT in late 2017.
                        Since then, he has refined his investment strategy to take advantage of the growing DeFi, ICO and NFT space in addition to investing in traditional crypto-assets.
                        He studies Global Business Management at Coventry University London.
                    </p><br/>
                        </div>
                        <div className="our-team">
                    <img src={logo} className="our-team-icons"/>
                    <h2>Cameron Hoffman</h2>
                    <p>
                        Prior to entering the crypto market, Cameron adopted an event driven strategy in longing and shorting traditional equities on behalf of his friends and family,
                        providing an average annual return of ~40% over his three-year tenure. In crypto, Cam’s focus has been on traditional crypto-assets and gaming applications.
                        At New York University, he studies Economics and Business, while also having founded a startup in his freshman year of study.
                    </p><br/>
                    </div>
                </div>

                <div
                    className={toggleState === 5 ? "content  active-content" : "content"}
                >

                    <p>
                        Any historical performance data represents past performance. Past performance does not guarantee future results.
                        Current performance may be different than the performance data presented.
                        The Company is not required by law to follow any standard methodology when calculating and representing performance data.
                        The performance of the Company may not be directly comparable to the performance of other private or registered funds or companies.
                        The securities are being offered in reliance on an exemption from the registration requirements,
                        and therefore are not required to comply with certain specific disclosure requirements.
                        The Securities and Exchange Comission has not passed upon the merits or approved the securities, the terms of the offering, or the accuracy of the materials.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tabs;