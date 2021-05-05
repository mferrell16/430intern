import Image from 'next/image';
import { bgWrap, bgText, welcome, logo, sublogo, adbutt, centext, centextw1 } from '../styles.module.css';
import Link from 'next/link';
const pstyle1 = {

"font-size": "30px"
};

const pstyle2 = {

"font-size": "20px"
};

const Background = () => (
  <div>
    <div className={bgWrap}>
      <Image
        alt="UMW"
        src="/back.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <body> 
    <div className={logo}>UMW</div>
    <div className={sublogo}>CPSC Major Opportunities</div>
     <div className={adbutt}>
      <Link href="/logina">
        <button >Admin Login</button>
        </Link> 
    </div>
    <hr />
    <br /> 
    <br /> 
    <div className={centextw1}>
        <div className={centext}>
            <p style={pstyle1}>Your Future Awaits!</p>
            <p style={pstyle2}>Login to explore what being a Computer Science major at UMW could mean for you.</p>
            <br /> 

            <Link href="/login">
        <button >Login</button>
        </Link> 
        <br /> 
        <br />
            <Link href="/creates">
        <button >Create Account (Student) </button>
        </Link> 
        <Link href="/createec">
        <button >Create Account (Employer/Alumni) </button>
        </Link> 
        

        </div>
    </div>

</body>
  </div>
)

export default Background