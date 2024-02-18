/* eslint-disable react/prop-types */
import classes from './Profile.module.css';
import profileImg from './../assets/images/minji.jpeg'

export default function Profile(
  {
    height,
    border,
    borderRadius,
    name,
    alias = null,
    customStyles,
    ...restProps
  }) {


  const defaultStyles = {
    height: height ? height : 400,
    border: border ? border : '5px solid coral',
    borderRadius: borderRadius ? borderRadius : '20px',
  }

  const styles = {
    ...defaultStyles,
    ...customStyles,
  }


  return (
    <figure>
      <img src={profileImg} style={styles} alt="뉴진스 민지" {...restProps} />
      <p>이름: {name}</p>
      {
        alias ? <p>별명: {alias}</p> : null
      }
      <figcaption className={classes.sr_only}>김민지</figcaption>
    </figure>
  )
}