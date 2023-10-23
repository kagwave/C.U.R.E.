export default function MountDisplay(iconUrl: string | undefined | boolean, pageTitle: string | undefined, location?: string) {

  let icon: any = document.querySelector("link[rel='icon']")!;

  if (!iconUrl) {
    icon.href = '/favicon.ico';
  } else {
    icon.href = iconUrl;   
  }

  if (!pageTitle) {
    document.title = "CURE";
  } else if (!location){
    document.title = pageTitle + " | CURE";
  } else {
    document.title = pageTitle;
  }

  if (location === undefined) {
    document.body.style.overflow = 'auto';
    if (document.querySelector('.header-bar') !== null) {
      var header: any = document.querySelector('.header-bar');
      var navbar: any = document.querySelector('.navbar');
      var body = document.getElementById('page-content');
      var footer = document.getElementById("footer-container");
      if (header) header!.style.display = 'flex';
      if (navbar) navbar!.style.display = 'flex';
      if (body) body.classList.remove("blur-effect");
      if (header) header.classList.remove("blur-effect");
      if (footer) footer.classList.remove("blur-effect");
    }
  }
    
}