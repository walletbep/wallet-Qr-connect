
const projectId = "a50f4d7d1e8bd4111c564ffd0e123456";

const { ethereumClient, wagmiConfig } = window.WalletConnectWagmi.createConfig({
  projectId,
  metadata: {
    name: "Premium dApp",
    description: "WalletConnect v2 Working dApp",
    url: "https://example.com",
    icons: []
  }
});

const web3modal = new window.WalletConnectModal.default({
  projectId,
  themeMode: "dark"
});

document.getElementById("connectBtn").onclick = async () => {
  await web3modal.open();

  ethereumClient.watchAccount((account) => {
    if (!account.address) return;

    document.getElementById("addr").innerText = account.address;
    document.getElementById("chain").innerText = account.chainId;
    document.getElementById("info").style.display = "block";
  });
};
