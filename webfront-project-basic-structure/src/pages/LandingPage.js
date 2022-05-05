import FixedHeader from '../components/common/FixedHeader';
import { Carousel } from 'antd';

const LandingPage = () => {
  const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '260px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <>
      <FixedHeader />
      <div className='Carousel'>
        <Carousel autoplay>
          <div>
            <h1 style={contentStyle}>컴포넌트를..</h1>
          </div>
          <div>
            <h2 style={contentStyle}>프롭스를 어케..</h2>
          </div>
          <div>
            <h3 style={contentStyle}>많이 때려박으려면</h3>
          </div>
          <div>
            <h1 style={contentStyle}>어케해야하지......</h1>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default LandingPage;
