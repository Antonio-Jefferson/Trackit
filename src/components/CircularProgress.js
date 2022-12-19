import { useContext } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import InformationUser from '../contexts/auth';

export default function CircularProgress() {
  const {porcentagemHabits} = useContext(InformationUser)
    return (
        <CircularProgressbar
        value={porcentagemHabits.toFixed(0)}
        text={porcentagemHabits > 0? `${porcentagemHabits.toFixed(0)}%` : "Hoje"}
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