const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a target="blank"  href="https://github.com/ajaysingh16601" className="w-1/2 h-1/2" >
          <img src="/assets/github.svg" alt="github"/>
          </a>
        </div>
        <div className="social-icon">
          <a target="blank"  href="https://www.linkedin.com/in/ajaysinghsolanki?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="w-1/2 h-1/2" >
            <img src="/assets/twitter.svg" alt="twitter" />
          </a> 
        </div>
        <div className="social-icon">
          <a className="w-1/2 h-1/2" target="blank" href="https://www.instagram.com/ajey.singh.__.01/profilecard/?igsh=MXhjdHVrOTc2MndqaA==">
            <img src="/assets/instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2024 Ajay Solanki</p>
    </footer>
  );
};

export default Footer;
// 