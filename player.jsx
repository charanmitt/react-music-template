import './player.css'
import PauseIconRoundedIcon from '@mui/icons-material/PauseRounded';
import PlayArrowIconRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import FastRewindIconRoundedIcon from '@mui/icons-material/FastRewindRounded';
import FastForwardIconRoundedIcon from '@mui/icons-material/FastForwardRounded';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';

const Player = () => {
  return (
    <div className="container">
        <img src='https://mui.com/static/images/cards/contemplative-reptile.jpg' alt='' className='cont-img'/>
        <div className='cont-inner'>
            <h2 className='cont-title'>Contemplative Reptile</h2>
            <h6 className='cont-subtitle'>Sounds of Nature</h6>
            <div className='cont-icon'>
                <FastRewindIconRoundedIcon sx={{fontSize:30}} className='i-1'/>
                <PauseIconRoundedIcon sx={{ fontSize: 50 }} className='i-2'/>
                <PlayArrowIconRoundedIcon sx={{ fontSize: 50 }} className='i-3'/>
                <FastForwardIconRoundedIcon sx={{fontSize : 30}} className='i-4'/>
                <LoopOutlinedIcon sx={{fontSize : 30}} className='i-4'/>
            </div>
        </div>
    </div>
  )
}

export default Player