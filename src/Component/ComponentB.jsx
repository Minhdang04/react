import React from 'react';
import './ComponentB.css'
 
const styles = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexDirection: 'column',
  position: 'absolute',
  bottom: 0,
};
const ComponentB = () => (
  <>
    <h1 style={{color: 'white', margin: '30px 0 30px 200px'}}>New Realease</h1>
    <div className='body'>
    <div className='item'style={{backgroundImage: `url(http://br.web.img3.acsta.net/pictures/16/02/03/17/11/571106.jpg)`}}>
      <p>Episode 1018<br></br><br></br>One Piece</p>
    </div>
    <div className='item' style={{backgroundImage: `url(https://pics.filmaffinity.com/naruto_shippuden-656283041-large.jpg)`}}>
      <p>Episode 1018<br></br><br></br>One Piece</p>
    </div>
    <div className='item' style={{backgroundImage: `url(https://wallpapers.com/images/hd/spy-x-family-alter-ego-reflection-7agfn9wipozdy2hb.jpg)`}}>
      <p>Episode 1018<br></br><br></br>One Piece</p>
    </div>
    <div className='item' style={{backgroundImage: `url(https://sm.ign.com/ign_latam/screenshot/default/visual-02_fjmz.jpg)`}}>
      <p>Episode 1018<br></br><br></br>One Piece</p>
    </div>
    <div className='item' style={{backgroundImage: `url(https://wallpaperaccess.com/full/1583626.jpg)`}}>
      <p>Episode 1018<br></br><br></br>One Piece</p>
    </div>
    <div className='item' style={{backgroundImage: `url(https://s1.zerochan.net/Aoashi.600.3491028.jpg)`}}>
      <p>Episode 1018<br></br><br></br>One Piece</p>
    </div>
      {/* <MiniComponentB backgroundImg="path/to/image1.jpg" text="Text" />
      <MiniComponentB backgroundImg="path/to/image1.jpg" text="Text" />
      <MiniComponentB backgroundImg="path/to/image1.jpg" text="Text" />
      <MiniComponentB backgroundImg="path/to/image1.jpg" text="Text" />
      <MiniComponentB backgroundImg="path/to/image1.jpg" text="Text" />
      <MiniComponentB backgroundImg="path/to/image1.jpg" text="Text" /> */}
    </div>
  </>
);

export default ComponentB
