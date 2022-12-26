import './App.css';
import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaEthereum } from 'react-icons/fa';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;


  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginRight: "10px", backgroundColor: "blue", borderRadius: "50%", }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginLeft: "10px", backgroundColor: "blue", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function App() {
  const [click1, setClick1] = useState(true);
  const [click2, setClick2] = useState(false);
  const handleChange1 = () => {
    setClick2(false);
    setClick1(true);
  }
  const handleChange2 = () => {
    setClick2(true);
    setClick1(false);
  }

  const personalize = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-full h-full ">
      <div className="  w-full m-auto h-full py-12 px-16 bg-gradient-to-b from-[#15b2e51a] to-[white]">
        {/* Heading and Slider */}
        <div className='flex-col justify-center items-center '>
          <h1 className='text-[24px] lg:text-[48px] font-semibold text-[black] text-center mb-10'>
            Explore, collect, and sell NFTs
          </h1>

          {/* Slider/ */}
          <div className='w-full mb-8'>
            <Slider {...settings}>
              {/* Single Item */}
              {/* SingleCard */}
              <div className=' px-2 py-5 '>

                <div className='bg-cover w-full h-[450px]   relative bg-[url("https://i.seadn.io/gae/QAkIg3r8XxTRJRMykEBfa9Qk7aWxow4l-YmArDIlXRWQW0sj8TGvsPgP5894xTZ0UJGdoRATG1gwsqmBmAiq2iBcW2e6erkP7pvu3qo?auto=format&w=384")] rounded-xl'>

                  <div className='absolute left-[10px] bottom-[10px] z-10'>

                    <h6 className='text-[16px] font-medium z-10 text-[white]'>Cow Town</h6>
                    <h6 className='text-[14px] font-normal z-10 text-[white]'>Floor: 0.13 ETH</h6>
                  </div>
                </div>
              </div>
              {/* end of SingleCard */}
              {/* SingleCard */}
              <div className=' px-2 py-5 '>

                <div className='bg-cover w-full h-[450px]  relative bg-[url("https://i.seadn.io/gae/QAkIg3r8XxTRJRMykEBfa9Qk7aWxow4l-YmArDIlXRWQW0sj8TGvsPgP5894xTZ0UJGdoRATG1gwsqmBmAiq2iBcW2e6erkP7pvu3qo?auto=format&w=384")] rounded-xl'>

                  <div className='absolute left-[10px] bottom-[10px] z-10'>

                    <h6 className='text-[16px] font-medium z-10 text-[white]'>Cow Town</h6>
                    <h6 className='text-[14px] font-normal z-10 text-[white]'>Floor: 0.13 ETH</h6>
                  </div>
                </div>
              </div>
              {/* end of SingleCard */}

              {/* SingleCard */}
              <div className=' px-2 py-5 '>

                <div className='bg-cover w-full h-[450px]  relative bg-[url("https://i.seadn.io/gae/QAkIg3r8XxTRJRMykEBfa9Qk7aWxow4l-YmArDIlXRWQW0sj8TGvsPgP5894xTZ0UJGdoRATG1gwsqmBmAiq2iBcW2e6erkP7pvu3qo?auto=format&w=384")] rounded-xl'>

                  <div className='absolute left-[10px] bottom-[10px] z-10'>

                    <h6 className='text-[16px] font-medium z-10 text-[white]'>Cow Town</h6>
                    <h6 className='text-[14px] font-normal z-10 text-[white]'>Floor: 0.13 ETH</h6>
                  </div>
                </div>
              </div>
              {/* end of SingleCard */}

              {/* SingleCard */}
              <div className=' px-2 py-5 '>

                <div className='bg-cover w-full h-[450px]  relative bg-[url("https://i.seadn.io/gae/QAkIg3r8XxTRJRMykEBfa9Qk7aWxow4l-YmArDIlXRWQW0sj8TGvsPgP5894xTZ0UJGdoRATG1gwsqmBmAiq2iBcW2e6erkP7pvu3qo?auto=format&w=384")] rounded-xl'>

                  <div className='absolute left-[10px] bottom-[10px] z-10'>

                    <h6 className='text-[16px] font-medium z-10 text-[white]'>Cow Town</h6>
                    <h6 className='text-[14px] font-normal z-10 text-[white]'>Floor: 0.13 ETH</h6>
                  </div>
                </div>
              </div>
              {/* end of SingleCard */}

              {/* end of Single Item */}

              {/* SingleCard */}
              <div className=' px-2 py-5 '>

                <div className='bg-cover w-full h-[450px]  relative bg-[url("https://i.seadn.io/gae/QAkIg3r8XxTRJRMykEBfa9Qk7aWxow4l-YmArDIlXRWQW0sj8TGvsPgP5894xTZ0UJGdoRATG1gwsqmBmAiq2iBcW2e6erkP7pvu3qo?auto=format&w=384")] rounded-xl'>

                  <div className='absolute left-[10px] bottom-[10px] z-10'>

                    <h6 className='text-[16px] font-medium z-10 text-[white]'>Cow Town</h6>
                    <h6 className='text-[14px] font-normal z-10 text-[white]'>Floor: 0.13 ETH</h6>
                  </div>
                </div>
              </div>
              {/* end of SingleCard */}

              {/* SingleCard */}
              <div className=' px-2 py-5 '>

                <div className='bg-cover w-full h-[450px]  relative bg-[url("https://i.seadn.io/gae/-mZ6hK_lGZinCPYZlIuzTGiLUk2blgt6OLoVskdtcnvqnVBGCHknUUNZusaQNVCoDQJdXxj_20SQW1Fj7EF80lOccgeExGTXj4SC-F8?auto=format&w=384")] rounded-xl'>

                  <div className='absolute left-[10px] bottom-[10px] z-10'>

                    <h6 className='text-[16px] font-medium z-10 text-[white]'>Cow Town</h6>
                    <h6 className='text-[14px] font-normal z-10 text-[white]'>Floor: 0.13 ETH</h6>
                  </div>
                </div>
              </div>
              {/* end of SingleCard */}

              {/* SingleCard */}
              <div className=' px-2 py-5 '>

                <div className='bg-cover w-full h-[450px]  relative bg-[url("https://i.seadn.io/gae/H-7VcyftWrm40KvMUFPt3F14U38LcOc30JNU4m3QvDV1cVVuZ8OfmlN3iN_ThCUyAnKCv994o92zCR-XLl6C-PxkN5OKnFxme3ya?auto=format&w=384")] rounded-xl'>

                  <div className='absolute left-[10px] bottom-[10px] z-10'>

                    <h6 className='text-[16px] font-medium z-10 text-[white]'>Cow Town</h6>
                    <h6 className='text-[14px] font-normal z-10 text-[white]'>Floor: 0.13 ETH</h6>
                  </div>
                </div>
              </div>
              {/* end of SingleCard */}

              {/* SingleCard */}
              <div className=' px-2 py-5 '>

                <div className='bg-cover w-full h-[450px]  relative bg-[url("https://i.seadn.io/gcs/files/c2372571fec8ca4f51ca76de0ea15c5d.png?auto=format&w=384")] rounded-xl'>

                  <div className='absolute left-[10px] bottom-[10px] z-10'>

                    <h6 className='text-[16px] font-medium z-10 text-[white]'>Cow Town</h6>
                    <h6 className='text-[14px] font-normal z-10 text-[white]'>Floor: 0.13 ETH</h6>
                  </div>
                </div>
              </div>
              {/* end of SingleCard */}


              {/* SingleCard */}
              <div className=' px-2 py-5 '>

                <div className='bg-cover w-full h-[450px]  relative bg-[url("https://i.seadn.io/gcs/files/9b3993367af853569e8174efead8e6a4.png?auto=format&w=384")] rounded-xl'>

                  <div className='absolute left-[10px] bottom-[10px] z-10'>

                    <h6 className='text-[16px] font-medium z-10 text-[white]'>Cow Town</h6>
                    <h6 className='text-[14px] font-normal z-10 text-[white]'>Floor: 0.13 ETH</h6>
                  </div>
                </div>
              </div>
              {/* end of SingleCard */}

              {/* SingleCard */}
              <div className=' px-2 py-5 '>

                <div className='bg-cover w-full h-[450px]  relative bg-[url("https://i.seadn.io/gcs/files/1f3dae543849e6769de98fdb49780398.png?auto=format&w=384")] rounded-xl'>

                  <div className='absolute left-[10px] bottom-[10px] z-10'>

                    <h6 className='text-[16px] font-medium z-10 text-[white]'>Cow Town</h6>
                    <h6 className='text-[14px] font-normal z-10 text-[white]'>Floor: 0.13 ETH</h6>
                  </div>
                </div>
              </div>
              {/* end of SingleCard */}


              {/* SingleCard */}
              <div className=' px-2 py-5 '>

                <div className='bg-cover w-full h-[450px]  relative bg-[url("https://i.seadn.io/gae/MjUBJZ4rB80Zklqze3O3Y4pU_EvwjBErVFHPTWhw1tJDxyM2FN1ICkcRBEOIMgmb2jKZkwCfEV_g4G4eH_uNRQlYCQAsmIOCQYHH?auto=format&w=384")] rounded-xl'>

                  <div className='absolute left-[10px] bottom-[10px] z-10'>

                    <h6 className='text-[16px] font-medium z-10 text-[white]'>Cow Town</h6>
                    <h6 className='text-[14px] font-normal z-10 text-[white]'>Floor: 0.13 ETH</h6>
                  </div>
                </div>
              </div>
              {/* end of SingleCard */}

              {/* SingleCard */}
              <div className=' px-2 py-5 '>

                <div className='bg-cover w-full h-[450px]  relative bg-[url("https://i.seadn.io/gcs/files/f169a78d4862a1d55878095a9ee0d0ae.jpg?auto=format&w=384")] rounded-xl'>

                  <div className='absolute left-[10px] bottom-[10px] z-10'>

                    <h6 className='text-[16px] font-medium z-10 text-[white]'>Cow Town</h6>
                    <h6 className='text-[14px] font-normal z-10 text-[white]'>Floor: 0.13 ETH</h6>
                  </div>
                </div>
              </div>
              {/* end of SingleCard */}

            </Slider>
          </div>
          {/* end of Slider/ */}
        </div>
        {/* end of Heading and Slider */}


        {/* Trending Coins */}
        <div className='w-full h-[60px] flex justify-between items-center border-b-[#e5e8eb80] border-b-[1px] border-b-[solid]'>
          {/* left Side */}
          <div className='flex justify-center items-center'>
            <h4 className={`text-[32px] mt-3 cursor-pointer border-b-[2px] border-b-[solid] font-medium ${click1 ? `border-b-[black]` : `border-b-transparent`}`} onClick={handleChange1}>Trending</h4>
            <h4 className={`text-[32px] mt-3  cursor-pointer border-b-[2px] border-b-[solid] ml-8 font-medium ${click2 ? `border-b-[black]` : `border-b-transparent`}`} onClick={handleChange2}>Top</h4>
          </div>
          {/* end of left Side */}

          {/* Right Part */}
          <div className='flex justify-center items-center'>
            <button className='py-2 px-8 rounded-xl border-[2px] h-[48px] border-solid border-[#e5e8eb80] mr-4 text-[16px] font-'>24h</button>
            <div className='flex justify-center items-center h-[48px]   rounded-xl border-[2px] border-solid border-[#e5e8eb80]'>
              <div className='pl-2 bg-[#e5e8eb80] h-full flex justify-center items-center px-3 py-2 text-[16px] font-semibold'>All Chains</div>
              <div className='pl-2 px-3 py-2'><FaEthereum /></div>
              <div className='pl-2 px-3 py-2'><FaEthereum /></div>
              <div className='pl-2 px-3 py-2'><FaEthereum /></div>
              <div className='pl-2 px-3 py-2'><FaEthereum /></div>
              <div className='pl-2 px-3 py-2'><FaEthereum /></div>
              <div className='pl-2 px-3 py-2'><FaEthereum /></div>
              <div className='pl-2 px-3 py-2'><FaEthereum /></div>
              <div className='pl-2 px-3 py-2'><FaEthereum /></div>
            </div>
            <button className='py-2 px-8 rounded-xl border-[2px] border-solid border-[#e5e8eb80] ml-4 h-[48px] text-[16px] font-'>View All</button>

          </div>
          {/* end of Right Part */}
        </div>
        {/* end of Trending Coins */}

        {/* List */}
        {click1 ?
          <div className='flex justify-center items-center'>
            <table className='w-[50%]  mt-12'>
              <tr >
                <th className='font-normal text-[16px] text-#7a7a83d9] pr-[180px] '>COLLECTION</th>
                <th className='font-normal text-[16px] text-#7a7a83d9] '>FLOOR PRICE</th>
                <th className='font-normal text-[16px] text-#7a7a83d9] '>VOLUME</th>
              </tr>
              {/* single row */}
              <tr >
                <td className='flex justify-center items-center  pr-14 pb-4'>
                  <h6 className='text-[32px] text-[#7a7a83d9] font-medium'>1</h6>
                  <img className='w-[68px]  border-[1px] border-[solid] border-[#e5e8eb80] h-[68px] rounded-xl mx-2' src='https://i.seadn.io/gcs/files/d2051befa1918d9e99191ff2a12ffc69.gif?auto=format&w=256' alt='td1' />
                  <h6 className='text-[16px] text-[black] '>ETH GOBBLERS</h6>
                </td>

                <td className='pl-8 font-semibold'>
                  0.32 ETH
                </td>
                <td className='pl-8 font-semibold'>
                  413 ETH
                </td>
              </tr>
              {/* end of single row */}

              {/* single row */}
              <tr>
                <td className='flex justify-center items-center pr-14 pb-4'>
                  <h6 className='text-[32px] text-[#7a7a83d9] font-medium'>2</h6>
                  <img className='w-[68px] border-[1px] border-[solid] border-[#e5e8eb80] h-[68px] rounded-xl mx-2' src='https://i.seadn.io/gcs/files/d2051befa1918d9e99191ff2a12ffc69.gif?auto=format&w=256' alt='td1' />
                  <h6 className='text-[16px] text-[black] '>ETH GOBBLERS</h6>
                </td>

                <td className='pl-8 font-semibold'>
                  0.32 ETH
                </td>
                <td className='pl-8 font-semibold'>
                  413 ETH
                </td>
              </tr>
              {/* end of single row */}

              {/* single row */}
              <tr>
                <td className='flex justify-center items-center  pr-14 pb-4'>
                  <h6 className='text-[32px] text-[#7a7a83d9] font-medium'>3</h6>
                  <img className='w-[68px] border-[1px] border-[solid] border-[#e5e8eb80] h-[68px] rounded-xl mx-2' src='https://i.seadn.io/gcs/files/d2051befa1918d9e99191ff2a12ffc69.gif?auto=format&w=256' alt='td1' />
                  <h6 className='text-[16px] text-[black] '>ETH GOBBLERS</h6>
                </td>

                <td className='pl-8 font-semibold'>
                  0.32 ETH
                </td>
                <td className='pl-8 font-semibold'>
                  413 ETH
                </td>
              </tr>
              {/* end of single row */}

              {/* single row */}
              <tr>
                <td className='flex justify-center items-center  pr-14 pb-4'>
                  <h6 className='text-[32px] text-[#7a7a83d9] font-medium'>4</h6>
                  <img className='w-[68px] border-[1px] border-[solid] border-[#e5e8eb80] h-[68px] rounded-xl mx-2' src='https://i.seadn.io/gcs/files/d2051befa1918d9e99191ff2a12ffc69.gif?auto=format&w=256' alt='td1' />
                  <h6 className='text-[16px] text-[black] '>ETH GOBBLERS</h6>
                </td>

                <td className='pl-8 font-semibold'>
                  0.32 ETH
                </td>
                <td className='pl-8 font-semibold'>
                  413 ETH
                </td>
              </tr>
              {/* end of single row */}

              {/* single row */}
              <tr>
                <td className='flex justify-center items-center  pr-14 pb-4'>
                  <h6 className='text-[32px] text-[#7a7a83d9] font-medium'>5</h6>
                  <img className='w-[68px] border-[1px] border-[solid] border-[#e5e8eb80] h-[68px] rounded-xl mx-2' src='https://i.seadn.io/gcs/files/d2051befa1918d9e99191ff2a12ffc69.gif?auto=format&w=256' alt='td1' />
                  <h6 className='text-[16px] text-[black] '>ETH GOBBLERS</h6>
                </td>

                <td className='pl-8 font-semibold'>
                  0.32 ETH
                </td>
                <td className='pl-8 font-semibold'>
                  413 ETH
                </td>
              </tr>
              {/* end of single row */}
            </table>

            <table className='w-[50%]  mt-12'>
              <tr className='w-full'>
                <th className='font-normal text-[16px] text-#7a7a83d9] pr-[180px] '>COLLECTION</th>
                <th className='font-normal text-[16px] text-#7a7a83d9] '>FLOOR PRICE</th>
                <th className='font-normal text-[16px] text-#7a7a83d9] '>VOLUME</th>
              </tr>
              {/* single row */}
              <tr  >
                <td className='flex justify-center items-center  pr-14 pb-4'>
                  <h6 className='text-[32px] text-[#7a7a83d9] font-medium'>1</h6>
                  <img className='w-[68px]  border-[1px] border-[solid] border-[#e5e8eb80] h-[68px] rounded-xl mx-2' src='https://i.seadn.io/gcs/files/d2051befa1918d9e99191ff2a12ffc69.gif?auto=format&w=256' alt='td1' />
                  <h6 className='text-[16px] text-[black] '>ETH GOBBLERS</h6>
                </td>

                <td className='pl-8 font-semibold'>
                  0.32 ETH
                </td>
                <td className='pl-8 font-semibold'>
                  413 ETH
                </td>
              </tr>
              {/* end of single row */}

              {/* single row */}
              <tr>
                <td className='flex justify-center items-center  pr-14 pb-4'>
                  <h6 className='text-[32px] text-[#7a7a83d9] font-medium'>2</h6>
                  <img className='w-[68px] border-[1px] border-[solid] border-[#e5e8eb80] h-[68px] rounded-xl mx-2' src='https://i.seadn.io/gcs/files/d2051befa1918d9e99191ff2a12ffc69.gif?auto=format&w=256' alt='td1' />
                  <h6 className='text-[16px] text-[black] '>ETH GOBBLERS</h6>
                </td>

                <td className='pl-8 font-semibold'>
                  0.32 ETH
                </td>
                <td className='pl-8 font-semibold'>
                  413 ETH
                </td>
              </tr>
              {/* end of single row */}

              {/* single row */}
              <tr>
                <td className='flex justify-center items-center  pr-14 pb-4'>
                  <h6 className='text-[32px] text-[#7a7a83d9] font-medium'>3</h6>
                  <img className='w-[68px] border-[1px] border-[solid] border-[#e5e8eb80] h-[68px] rounded-xl mx-2' src='https://i.seadn.io/gcs/files/d2051befa1918d9e99191ff2a12ffc69.gif?auto=format&w=256' alt='td1' />
                  <h6 className='text-[16px] text-[black] '>ETH GOBBLERS</h6>
                </td>

                <td className='pl-8 font-semibold'>
                  0.32 ETH
                </td>
                <td className='pl-8 font-semibold'>
                  413 ETH
                </td>
              </tr>
              {/* end of single row */}

              {/* single row */}
              <tr>
                <td className='flex justify-center items-center  pr-14 pb-4'>
                  <h6 className='text-[32px] text-[#7a7a83d9] font-medium'>4</h6>
                  <img className='w-[68px] border-[1px] border-[solid] border-[#e5e8eb80] h-[68px] rounded-xl mx-2' src='https://i.seadn.io/gcs/files/d2051befa1918d9e99191ff2a12ffc69.gif?auto=format&w=256' alt='td1' />
                  <h6 className='text-[16px] text-[black] '>ETH GOBBLERS</h6>
                </td>

                <td className='pl-8 font-semibold'>
                  0.32 ETH
                </td>
                <td className='pl-8 font-semibold'>
                  413 ETH
                </td>
              </tr>
              {/* end of single row */}

              {/* single row */}
              <tr>
                <td className='flex justify-center items-center  pr-14 pb-4'>
                  <h6 className='text-[32px] text-[#7a7a83d9] font-medium'>5</h6>
                  <img className='w-[68px] border-[1px] border-[solid] border-[#e5e8eb80] h-[68px] rounded-xl mx-2' src='https://i.seadn.io/gcs/files/d2051befa1918d9e99191ff2a12ffc69.gif?auto=format&w=256' alt='td1' />
                  <h6 className='text-[16px] text-[black] '>ETH GOBBLERS</h6>
                </td>

                <td className='pl-8 font-semibold'>
                  0.32 ETH
                </td>
                <td className='pl-8 font-semibold'>
                  413 ETH
                </td>
              </tr>
              {/* end of single row */}
            </table>
          </div> : <h6 className='flex justify-center items-center text-[53px] font-bold'>No data</h6>}
        {/* end ofList */}


        {/* Small cards 1*/}
        <div className='flex-col justify-center items-center my-8 '>
          <h6 className='text-[32px] font-semibold text-[black] mb-8'>Notable Collection</h6>
          {/* slider */}
          <Slider {...personalize}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => {
              return <>
                <div className='px-2 py-5 hover:py-4 transition-all' >

                  <div className=' rounded-b-xl  shadow-[black] h-[330px] shadow-lg shadow-[#0000001a] grid grid-row-[8fr_4fr] rounded-t-xl'>
                    <div className='h-[196px] w-full'> <img alt='smallCard' className='rounded-t-xl w-full h-full' src='https://i.seadn.io/gcs/files/2d21367a0bdef1d9db4505e86dba8fdd.gif?auto=format&w=256'></img></div>

                    <div className='flex-col justify-center items-center p-4'>
                      <h6 className='text-[16px] font-semibold mb-4'>Scottie Pippen SP33</h6>
                      <div className='flex justify-start items-center'>
                        <div className='flex-col justify-center items-start'>
                          <h6 className='text-[14px]  font-normal text-[#7a7a83d9]'> FLOOR</h6>
                          <h6 className='text-[14px] font-semibold'>0.32 ETH</h6>
                        </div>
                        <div className='flex-col justify-center items-center ml-[80px]'>
                          <h6 className='text-[14px] font-normal text-[#7a7a83d9]'> FLOOR</h6>
                          <h6 className='text-[14px] font-semibold'>0.32 ETH</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            })}
          </Slider>
          {/* end of slider */}
        </div>
        {/* end of Small cards */}

        {/* Small cards 2*/}
        <div className='flex-col justify-center items-center my-8'>
          <h6 className='text-[32px] font-semibold text-[black] mb-8'>Top collector buys today</h6>
          {/* slider */}
          <Slider {...personalize}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => {
              return <>
                <div className='px-2 py-5 hover:py-4 transition-all' >

                  <div className=' rounded-b-xl   h-[330px] shadow-lg shadow-[#0000001a]  grid grid-row-[8fr_4fr] rounded-t-xl'>
                    <div className='h-[196px] w-full'> <img alt='smallCard' className='rounded-t-xl w-full h-full' src='https://i.seadn.io/gcs/files/27d663f35030ea9aa51aac4995398e73.gif?auto=format&w=384'></img></div>

                    <div className='flex-col justify-center items-center p-4'>
                      <h6 className='text-[16px] font-semibold mb-4'>Scottie Pippen SP33</h6>
                      <div className='flex justify-start items-center'>
                        <div className='flex-col justify-center items-start'>
                          <h6 className='text-[14px]  font-normal text-[#7a7a83d9]'> FLOOR</h6>
                          <h6 className='text-[14px] font-semibold'>0.32 ETH</h6>
                        </div>
                        <div className='flex-col justify-center items-center ml-[80px]'>
                          <h6 className='text-[14px] font-normal text-[#7a7a83d9]'> FLOOR</h6>
                          <h6 className='text-[14px] font-semibold'>0.32 ETH</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            })}
          </Slider>
          {/* end of slider */}
        </div>
        {/* end of Small cards */}
        {/* Small cards 3*/}
        <div className='flex-col justify-center items-center my-8'>
          <div className='flex-col justify-center items-center'>

            <h6 className='text-[32px] mb-2 font-semibold text-[black] '>NFT 101</h6>
            <h6 className='text-[16px] text-[#7a7a83d9]'>Get comfortable with the basics</h6>
          </div>
          {/* slider */}
          <Slider {...personalize}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => {
              return <>
                <div className='px-2 py-5 hover:py-4 transition-all' >

                  <div className=' rounded-b-xl   h-[270px] shadow-lg shadow-[#0000001a]  grid grid-row-[8fr_4fr] rounded-t-xl'>
                    <div className='h-[196px] w-full'> <img alt='smallCard' className='rounded-t-xl w-full h-full' src='https://opensea.io/static/images/learn-center//what-is-nft.png'></img></div>

                    <div className='flex-col justify-center items-center p-4'>
                      <h6 className='text-[16px] font-semibold mb-4'>What is NFT?</h6>

                    </div>
                  </div>
                </div>
              </>
            })}
          </Slider>
          {/* end of slider */}
        </div>
        {/* end of Small cards */}
        {/* Small cards 4*/}
        <div className='flex-col justify-center items-center my-8'>
          <div className='flex-col justify-center items-center'>

            <h6 className='text-[32px] mb-2 font-semibold text-[black] '>Browse by category</h6>

          </div>
          {/* slider */}
          <Slider {...personalize}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => {
              return <>
                <div className='px-2 py-5 hover:py-4 transition-all' >

                  <div className=' rounded-b-xl   h-[270px] shadow-lg shadow-[#0000001a]   grid grid-row-[8fr_4fr] rounded-t-xl'>
                    <div className='h-[196px] w-full'> <img alt='smallCard' className='rounded-t-xl w-full h-full' src='https://opensea.io/static/images/categories/art.png'></img></div>

                    <div className='flex-col justify-center items-center p-4'>
                      <h6 className='text-[16px] font-semibold mb-4'>ART</h6>

                    </div>
                  </div>
                </div>
              </>
            })}
          </Slider>
          {/* end of slider */}
        </div>
        {/* end of Small cards */}


      </div>



    </div >
  );
}

export default App;
