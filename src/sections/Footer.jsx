// socialLinks import 
import {socialLinks} from '../constants/index';
import toast from 'react-hot-toast';

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
<div className="text-white-500 flex gap-2">
  <p
  className="cursor-pointer hover:underline"
  onClick={() => toast("😎 Terms? I like to keep things casual.", {
  style: {
    borderRadius: '8px',
    background: '#000',
    color: '#fff',
  },
})}
  >
    Terms & Conditions
  </p>
  <p>|</p>
  <p
    className="cursor-pointer hover:underline"
    onClick={() => toast("👻 Privacy Policy? Just pretend it’s haunted.", {
  style: {
    borderRadius: '8px',
    background: '#000',
    color: '#fff',
  },
})}
  >
    Privacy Policy
  </p>
</div>
      <div className="flex gap-3">
        {socialLinks.map(({ id, href, icon, alt }) => (
          <div key={id} className="social-icon">
            <a target="_blank" rel="noopener noreferrer" href={href} className="w-1/2 h-1/2">
              <img src={icon} alt={alt} />
            </a>
          </div>
        ))}
      </div>
      <p className="text-white-500">© 2024 Ajay Solanki</p>
    </footer>
  );
};

export default Footer;
// 