import React, { Component } from "react";
import './styles.css'

interface IProps {
}

interface IState {

}

class Content extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="ContentMainContainer" >
                <div className="ContentBodyH" >How do I create and sell NFTs on Polygon?</div><br />
                <div className="ContentBodyP" > BluOcean supports NFT trading across multiple blockchains. This guide explains how to use our Polygon marketplace to create and sell NFTs without paying any gas fees. <br /><br />

                    To start creating NFTs for free, click your profile icon and press "My Collections". <br /><br />

                    Make sure to add your collection logo, description, banner, social media links, and set your creator earnings. You can also select which blockchain to create NFTs on by default. Click on the dropdown menu and select Polygon.<br /><br />
                </div>


                <div className="ContentBodyH" > Selling an NFT on Polygon</div> <br />

                <div className="ContentBodyP" > Now, let's sell your first NFT on Polygon. Visit your NFT and press Sell in the top right corner. <br /><br />

                    You'll be taken to a new pop-up window, where you can set your selling price, currency, and view any potential fees associated with your sale. You can also schedule your sale in advance! <br /><br />

                    Once you've confirmed your sale details, press Complete listing. You'll be asked to complete your listing in another window.<br /><br />

                    Click Sign, and then your crypto wallet will prompt you to sign the transaction on your end. If you're using MetaMask as your crypto wallet, the signature request will appear like this.<br /><br />

                    Click sign and your authorization will complete shortly after.<br /><br />

                    Once your NFT listing is confirmed, you'll get a confirmation showing Your NFT is listed!. You'll now be able to copy the item link and share it on social media!<br /><br />

                    You can also head back to the item page to see how your newly-listed NFT will appear to potential buyers. Good luck with your sale!<br /><br /></div>
            </div >
        );
    }
}

export default Content;