// 简单 DApp 示例 +0.01

let userAddress = "";

// 页面元素
const loginPage = document.getElementById("loginPage");
const confirmPage = document.getElementById("confirmPage");
const homePage = document.getElementById("homePage");

const connectWalletBtn = document.getElementById("connectWalletBtn");
const walletAddressP = document.getElementById("walletAddress");
const goToConfirmBtn = document.getElementById("goToConfirmBtn");
const goToHomeBtn = document.getElementById("goToHomeBtn");

const navBtns = document.querySelectorAll(".nav-btn");
const tabContent = document.getElementById("tabContent");
const tabs = tabContent.children;

// 连接钱包
connectWalletBtn.onclick = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      userAddress = accounts[0];
      walletAddressP.textContent = "已连接: " + userAddress;
      goToConfirmBtn.disabled = false;
    } catch (err) {
      console.error(err);
      alert("连接钱包失败");
    }
  } else {
    alert("请安装 MetaMask 钱包");
  }
};

// 跳转到确认关系页
goToConfirmBtn.onclick = () => {
  loginPage.style.display = "none";
  confirmPage.style.display = "block";
};

// 跳转到主页
goToHomeBtn.onclick = () => {
  confirmPage.style.display = "none";
  homePage.style.display = "block";
};

// 底部导航切换
navBtns.forEach(btn => {
  btn.onclick = () => {
    const target = btn.dataset.page;
    for (let tab of tabs) {
      tab.style.display = (tab.id === target) ? "block" : "none";
    }
  };
});
