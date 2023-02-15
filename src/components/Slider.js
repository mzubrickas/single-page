import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.min.css';
import '../styles/slider.scss'
import courseOne from '../assets/images/course-one.jpg'
import courseTwo from '../assets/images/course-two.jpg'
import courseThree from '../assets/images/course-three.jpg'
import courseFour from '../assets/images/course-four.jpg'
import courseFive from '../assets/images/course-five.jpg'
import courseSix from '../assets/images/course-six.jpg'
import courseSeven from '../assets/images/course-seven.jpg'
import courseEight from '../assets/images/course-eight.jpg'
import courseNine from '../assets/images/course-nine.jpg'
import star from '../assets/icons/star.png'
import lesson from '../assets/icons/lessons.png'
import clock from '../assets/icons/clock.png'
import level from '../assets/icons/levels.png'

export const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        loop={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className="container">
              <img src={courseOne} alt='laptop-screen-with-code'/>
              <div class="content"></div>
            </div>
            <div className="courseRate">
              <h5>4.5</h5>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <p>(1991)</p>
            </div>
            <h4 className="coursName">Learn Figma - UI/UX Design Essential Training</h4>
            <div className="courseType">
              <div className="lessons">
                <img src={lesson} alt='paper-sheet-icon'/>
                <p>6 lesson</p>
              </div>
              <div className="clock">
                <img src={clock} alt='clock-icon'/>
                <p>3h 56m</p>
              </div>
              <div className="level">
                <img src={level} alt='thre-columns-icon'/>
                <p>Beginner</p>
              </div>
            </div>
            <div className="price">
              <div className="profileContainer">
                <div className="profile"></div>
                <h3 className="name">Ali Tufan</h3>
              </div>
              <div className="discount">
                <p className="fullPrice">$179</p>
                <p className="newPrice">$79</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div className="container">
              <img src={courseTwo} alt='male-coding-on-three-screens'/>
              <div class="content popular">
                POPULAR
              </div>
              <div class="content bestSeller">
                BEST SELLER
              </div>
            </div>
            <div className="courseRate">
              <h5>4.5</h5>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <p>(1991)</p>
            </div>
            <h4 className="coursName">Complete Python Bootcamp From Zero To Hero In Python</h4>
            <div className="courseType">
              <div className="lessons">
                <img src={lesson} alt='paper-sheet-icon'/>
                <p>6 lesson</p>
              </div>
              <div className="clock">
                <img src={clock} alt='clock-icon'/>
                <p>3h 56m</p>
              </div>
              <div className="level">
                <img src={level} alt='thre-columns-icon'/>
                <p>Beginner</p>
              </div>
            </div>
            <div className="price">
              <div className="profileContainer">
                <div className="profile"></div>
                <h3 className="name">Ali Tufan</h3>
              </div>
              <div className="discount">
                <p className="fullPrice">$179</p>
                <p className="newPrice">$79</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div className="container">
              <img src={courseThree} alt='half-laptop-on-screen-some-code'/>
              <div class="content new">
                NEW
              </div>
            </div>
            <div className="courseRate">
              <h5>4.5</h5>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <p>(1991)</p>
            </div>
            <h4 className="coursName">Angular - The COmplete Guide (2022 Edition)</h4>
            <div className="courseType">
              <div className="lessons">
                <img src={lesson} alt='paper-sheet-icon'/>
                <p>6 lesson</p>
              </div>
              <div className="clock">
                <img src={clock} alt='clock-icon'/>
                <p>3h 56m</p>
              </div>
              <div className="level">
                <img src={level} alt='thre-columns-icon'/>
                <p>Beginner</p>
              </div>
            </div>
            <div className="price">
              <div className="profileContainer">
                <div className="profile"></div>
                <h3 className="name">Ali Tufan</h3>
              </div>
              <div className="discount">
                <p className="fullPrice">$179</p>
                <p className="newPrice">$79</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div className="container">
              <img src={courseFour} alt='laptop-on-screen-some-code'/>
              <div class="content popular">
                POPULAR
              </div>
            </div>
            <div className="courseRate">
              <h5>4.5</h5>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <p>(1991)</p>
            </div>
            <h4 className="coursName">The Ultimate Drawing Course Beginner To Advanced</h4>
            <div className="courseType">
              <div className="lessons">
                <img src={lesson} alt='paper-sheet-icon'/>
                <p>6 lesson</p>
              </div>
              <div className="clock">
                <img src={clock} alt='clock-icon'/>
                <p>3h 56m</p>
              </div>
              <div className="level">
                <img src={level} alt='thre-columns-icon'/>
                <p>Beginner</p>
              </div>
            </div>
            <div className="price">
              <div className="profileContainer">
                <div className="profile"></div>
                <h3 className="name">Ali Tufan</h3>
              </div>
              <div className="discount">
                <p className="fullPrice">$179</p>
                <p className="newPrice">$79</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div className="container">
              <img src={courseFive} alt='two-people-coding-on-large-monitors'/>
              <div class="content"></div>
            </div>
            <div className="courseRate">
              <h5>4.5</h5>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <p>(1991)</p>
            </div>
            <h4 className="coursName">Learn Figma - UI/UX Design Essential Training</h4>
            <div className="courseType">
              <div className="lessons">
                <img src={lesson} alt='paper-sheet-icon'/>
                <p>6 lesson</p>
              </div>
              <div className="clock">
                <img src={clock} alt='clock-icon'/>
                <p>3h 56m</p>
              </div>
              <div className="level">
                <img src={level}  alt='thre-columns-icon'/>
                <p>Beginner</p>
              </div>
            </div>
            <div className="price">
              <div className="profileContainer">
                <div className="profile"></div>
                <h3 className="name">Ali Tufan</h3>
              </div>
              <div className="discount">
                <p className="fullPrice">$179</p>
                <p className="newPrice">$79</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div className="container">
              <img src={courseSix} alt='male-coding-on-laptop'/>
              <div class="content"></div>
            </div>
            <div className="courseRate">
              <h5>4.5</h5>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <p>(1991)</p>
            </div>
            <h4 className="coursName">Learn Figma - UI/UX Design Essential Training</h4>
            <div className="courseType">
              <div className="lessons">
                <img src={lesson} alt='paper-sheet-icon'/>
                <p>6 lesson</p>
              </div>
              <div className="clock">
                <img src={clock} alt='clock-icon'/>
                <p>3h 56m</p>
              </div>
              <div className="level">
                <img src={level}  alt='thre-columns-icon'/>
                <p>Beginner</p>
              </div>
            </div>
            <div className="price">
              <div className="profileContainer">
                <div className="profile"></div>
                <h3 className="name">Ali Tufan</h3>
              </div>
              <div className="discount">
                <p className="fullPrice">$179</p>
                <p className="newPrice">$79</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div className="container">
              <img src={courseSeven} alt='laptop-on-table-and-some-plants'/>
              <div class="content"></div>
            </div>
            <div className="courseRate">
              <h5>4.5</h5>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <p>(1991)</p>
            </div>
            <h4 className="coursName">Learn Figma - UI/UX Design Essential Training</h4>
            <div className="courseType">
              <div className="lessons">
                <img src={lesson} alt='paper-sheet-icon'/>
                <p>6 lesson</p>
              </div>
              <div className="clock">
                <img src={clock} alt='clock-icon'/>
                <p>3h 56m</p>
              </div>
              <div className="level">
                <img src={level}  alt='thre-columns-icon'/>
                <p>Beginner</p>
              </div>
            </div>
            <div className="price">
              <div className="profileContainer">
                <div className="profile"></div>
                <h3 className="name">Ali Tufan</h3>
              </div>
              <div className="discount">
                <p className="fullPrice">$179</p>
                <p className="newPrice">$79</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div className="container">
              <img src={courseEight} alt='laptop-in-dark-room'/>
              <div class="content"></div>
            </div>
            <div className="courseRate">
              <h5>4.5</h5>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <p>(1991)</p>
            </div>
            <h4 className="coursName">Learn Figma - UI/UX Design Essential Training</h4>
            <div className="courseType">
              <div className="lessons">
                <img src={lesson} alt='paper-sheet-icon'/>
                <p>6 lesson</p>
              </div>
              <div className="clock">
                <img src={clock} alt='clock-icon'/>
                <p>3h 56m</p>
              </div>
              <div className="level" >
                <img src={level}  alt='thre-columns-icon'/>
                <p>Beginner</p>
              </div>
            </div>
            <div className="price">
              <div className="profileContainer">
                <div className="profile"></div>
                <h3 className="name">Ali Tufan</h3>
              </div>
              <div className="discount">
                <p className="fullPrice">$179</p>
                <p className="newPrice">$79</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div className="container">
              <img src={courseNine} alt='laptop-on-table-in-very-bright-room'/>
              <div class="content"></div>
            </div>
            <div className="courseRate">
              <h5>4.5</h5>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <img className='star' src={star} alt='star-icon'/>
              <p>(1991)</p>
            </div>
            <h4 className="coursName">Learn Figma - UI/UX Design Essential Training</h4>
            <div className="courseType">
              <div className="lessons">
                <img src={lesson} alt='paper-sheet-icon'/>
                <p>6 lesson</p>
              </div>
              <div className="clock">
                <img src={clock} alt='clock-icon'/>
                <p>3h 56m</p>
              </div>
              <div className="level">
                <img src={level}  alt='thre-columns-icon'/>
                <p>Beginner</p>
              </div>
            </div>
            <div className="price">
              <div className="profileContainer">
                <div className="profile"></div>
                <h3 className="name">Ali Tufan</h3>
              </div>
              <div className="discount">
                <p className="fullPrice">$179</p>
                <p className="newPrice">$79</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}