import React, { useState } from 'react';
import styled from 'styled-components';
import { useOverview } from '../../SharedContexts/OverviewProvider';
// import Thumbnail from './Thumbnail';
import Carousel from './Carousel';
import './Carousel.css';

function ImageGallery() {
  const { currentStyle } = useOverview();
  // const [currentImage, setCurrentImage] = useState(props.style.photos[0]);
  // const [clicked, setClicked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // function toDisplayImage(newPhoto, imagechanged, index2) {
  //   setCurrentImage({ url: newPhoto });
  //   setClicked(imagechanged);
  //   setCurrentIndex(index2);
  // }

  // const test() {
  //   d
  // }

  // console.log('currentStyle', currentStyle);

  function handleClick(e) {
    // setClicked(true);
    setCurrentIndex(Number(e.target.name));
    // console.log('e.target', e.target.name);
    // console.log('in handleclick', currentIndex)
  }

  // function updateIndex(newIndex) {
  //   if (newIndex < 0) {
  //     newIndex = 0
  //   }
  // }

  // useEffect(() => {
  //   handleClick();
  // }, [currentIndex])

  if (!currentStyle) {
    return null;
  }

  return (
    <div
      className="ImageGallery"
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        maxHeight: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <div
        className="MainImage"
        style={{
          maxWidth: '400px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Carousel show={1} infiniteLoop>
          {(currentStyle.photos.map(
            (photo, index) => (<MainImage src={photo.url || 'https://anthemprep.greatheartsamerica.org/wp-content/uploads/sites/12/2016/12/default-placeholder.png'} key={index} />),
          ))}
        </Carousel>
      </div>

      {currentStyle.photos.length > 7 ? (

        <div
          className="Thumbnail"
          style={{
            width: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Carousel show={7} infiniteLoop>
            {(currentStyle.photos.map(
              (photo, index) => (
                <Thumbnail
                  src={photo.thumbnail_url || 'https://anthemprep.greatheartsamerica.org/wp-content/uploads/sites/12/2016/12/default-placeholder.png'}
                  key={index}
                  name={index}
                  onClick={handleClick}
                />
              ),
            ))}
          </Carousel>
        </div>

      ) : (
        // style={{
        //   maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto', marginTop: 64,
        // }}
        <div
          className="Thumbnail"
          style={{
            width: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {(currentStyle.photos.map(
            (photo, index) => (
              <Thumbnail
                src={photo.thumbnail_url || 'https://anthemprep.greatheartsamerica.org/wp-content/uploads/sites/12/2016/12/default-placeholder.png'}
                key={index}
                name={index}
                onClick={handleClick}
              />
            ),
          ))}
        </div>

      )}

    </div>
  );
}

{ /* <div
        className="MainImage"
        style={{
          maxWidth: '80%', maxHeight: '80%',marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Carousel>

            {(currentStyle.photos.map(
              (photo, index) => (<MainImage src={photo.url} key={index} />),
            ))}

        </Carousel>
      </div> */ }

{ /* <div
          className="MainImage"
          style={{
            maxWidth: '70%', maxHeight: '70%',
          }}
        >
          <Carousel show={1} infiniteLoop>
            {(currentStyle.photos.map(
              (photo, index) => (<MainImage src={photo.url} key={index} />),
            ))}
          </Carousel>
        </div>

      {currentStyle.photos.length > 7 ? (
      style={{
        maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto', marginTop: 64,
      }}
        <div className="Thumbnail"
        style={{
          maxWidth: '30%', maxHeight: '30%',
        }}>
          <Carousel show={7} infiniteLoop>
            {(currentStyle.photos.map(
              (photo, index) => (
                <Thumbnail
                  src={photo.thumbnail_url}
                  name={index}
                  onClick={handleClick}
                />
              ),
            ))}
          </Carousel>
        </div>

      ) : (
      style={{
        maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto', marginTop: 64,
      }}
        <div className="Thumbnail" style={{
          maxWidth: '30%', maxHeight: '30%',
        }}>
          {(currentStyle.photos.map(
            (photo, index) => (
              <Thumbnail
                src={photo.thumbnail_url}
                key={index}
                name={index}
                onClick={handleClick}
              />
            ),
          ))}
        </div>

      )} */ }
export default ImageGallery;

const Gallery = styled.div`
  maxWidth: '100%';
  maxHeight: '100%';
  marginLeft: 'auto';
  marginRight: 'auto';
  position: 'relative';
  display: 'flex';
  flex-direction: 'column';
  `;

const MainImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Thumbnail = styled.img`
  margin: 5px;
  border: 1px solid #CCCCCC;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
