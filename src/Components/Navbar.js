import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';

import './Navbar.css';
const Navbar = () => {
    const { connection } = useConnection();
    const wallet = useWallet();
    async function click() {
        // Uncomment the below command to test your connection to your node
        //console.log(await connection.getEpochInfo())
        // Add transfer instruction to transaction
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey('CmUVEBGd6h91m8ZGPxafFe9EdCC12jZxFBt5zTaQQehK'),
                lamports: LAMPORTS_PER_SOL / 100,
            })
        );

        // Sign transaction, broadcast, and confirm
        const signature = await wallet.sendTransaction(transaction, connection);
        console.log('SIGNATURE', signature);
    }

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="/"/> */}
                    <img
                        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsolana.com%2Fbranding&psig=AOvVaw1DImEe2VhGRVvVw87KQLXN&ust=1668935879104000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCj5uP0ufsCFQAAAAAdAAAAABAT"
                        alt="Logo"
                        width="30"
                        height="24"
                        className="d-inline-block align-text-top"
                    />
                    Organ Donation BlockChain
                    <WalletMultiButton />
                    <button className="transButton" onClick={click}>
                        Deposit Entry Fees
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
