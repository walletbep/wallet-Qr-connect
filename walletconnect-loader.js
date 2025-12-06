(async () => {
  try {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@walletconnect/sign-client@2.10.1/dist/umd/sign-client.js";
    script.onload = () => {
      window.WalletConnectSignClient = window.SignClient;
      console.log("WalletConnect v2 UMD Loaded Successfully!");
    };
    document.head.appendChild(script);
  } catch (err) {
    console.error("WalletConnect Load Error:", err);
  }
})();
