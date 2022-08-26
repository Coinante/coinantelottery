import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import LotteryEntrance from "../components/LotteryEntrance";
import { useMoralis } from "react-moralis";

const supportedChains = ["56"];

export default function Home() {
  const { isWeb3Enabled, chainId } = useMoralis();

  return (
    <div>
       <Header  />
    <div className={styles.container}>
      {isWeb3Enabled ? (
        <div>
          {supportedChains.includes(parseInt(chainId).toString()) ? (
            <div className="flex flex-row">
              <LotteryEntrance className="p-8" />
            </div>
          ) : (
            <div 
            className="py-1 px-1 font-bold text-1xl text-red-600"
            >{`Please switch to a supported chainId. The supported Chain Id is: ${supportedChains}`}</div>
          )}
        </div>
      ) : (
        <div
        className="py-1 px-1 font-bold text-1xl text-blue-700"
        >Please connect to a Wallet</div>
      )}
    </div>
    </div>
  );
}
