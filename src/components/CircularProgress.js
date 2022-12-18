import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CircularProgress() {
    return (
        <CircularProgressbar
        value={0}
        text={`Hoje`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
        })}
      />
    )
}