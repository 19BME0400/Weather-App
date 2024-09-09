import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import "./InfoBox.css";
export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1628064673819-60b90d77ec19?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    let HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEhPVCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1672588337239-c77070c3f4d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let RAIN_URL = "https://plus.unsplash.com/premium_photo-1661715319384-437cc4d1bbfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxyYWlueSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return (
        <div className="InfoBox">
            
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          {info.city} &nbsp; {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <SevereColdIcon/>} 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <div>Tempearture = {info.temp}&deg;C</div>
          <div>Humidity = {info.humidity}</div>
          <div>Min Temp = {info.tempMin}&deg;C</div>
          <div>Max Temp = {info.tempMax}&deg;C</div>
          <div>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
      
    </Card>
    </div>

        </div>
    )
}