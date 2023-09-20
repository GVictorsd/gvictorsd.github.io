import classes from './section.module.css';

function Section({ children, imageuri}) {

    const containerStyle = {
      backgroundImage: `url(${imageuri})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',

    }
  return (
    <div className={classes["container"]} style={containerStyle}>
      <div className={classes["innerdiv"]}>
        {children}
      </div>
    </div>
  )
}

export default Section;