import React from "react";
import uniqid from "uniqid";

const EducationItem = function (props) {
  const onEdit = (e) => {
    props.parentCallbackEducIndexEdit(
      +e.target.parentElement.parentElement.id.slice(9)
    );
  };

  const onDel = (e) => {
    props.parentCallbackEducIndexDel(
      +e.target.parentElement.parentElement.id.slice(9)
    );
  };

  const educationArr = props.education;
  const educationListItems = educationArr.map((item, index) => {
    const id = uniqid();

    return (
      <li className='section-item__container' id={"educIndex" + index} key={id}>
        <div className='item__header--educ'>
          <h3>
            {item.deg} <span>{item.sub}</span>
            <span className='small-text--no-margin'>{item.uni}</span>
          </h3>
          <p className='align-txt-right'>
            {item.dates[0]} -
            <br />
            {item.dates[1]}
          </p>
        </div>
        <div className='btns__container'>
          <button onClick={onEdit} id={id} className='btn--cv' type='button'>
            Edit
          </button>
          <button onClick={onDel} id={id} className='btn--cv' type='button'>
            Delete
          </button>
        </div>
        <div className='expitem__divider'></div>
      </li>
    );
  });

  return <ul>{educationListItems}</ul>;
};

// class EducationItem extends Component {
//   onEdit = (e) => {
//     this.props.parentCallbackEducIndexEdit(
//       +e.target.parentElement.parentElement.id.slice(9)
//     );
//   };

//   onDel = (e) => {
//     this.props.parentCallbackEducIndexDel(
//       +e.target.parentElement.parentElement.id.slice(9)
//     );
//   };

//   render() {
//     const educationArr = this.props.education;
//     const educationListItems = educationArr.map((item, index) => {
//       const id = uniqid();

//       return (
//         <li
//           className='section-item__container'
//           id={"educIndex" + index}
//           key={id}
//         >
//           <div className='item__header--educ'>
//             <h3>
//               {item.deg} <span>{item.sub}</span>
//               <span className='small-text--no-margin'>{item.uni}</span>
//             </h3>
//             <p className='align-txt-right'>
//               {item.dates[0]} -
//               <br />
//               {item.dates[1]}
//             </p>
//           </div>
//           <div className='btns__container'>
//             <button
//               onClick={this.onEdit}
//               id={id}
//               className='btn--cv'
//               type='button'
//             >
//               Edit
//             </button>
//             <button
//               onClick={this.onDel}
//               id={id}
//               className='btn--cv'
//               type='button'
//             >
//               Delete
//             </button>
//           </div>
//           <div className='expitem__divider'></div>
//         </li>
//       );
//     });

//     return <ul>{educationListItems}</ul>;
//   }
// }

const Education = function (props) {
  return (
    <EducationItem
      parentCallbackEducIndexEdit={props.parentCallbackEducIndexEdit}
      parentCallbackEducIndexDel={props.parentCallbackEducIndexDel}
      education={props.education}
    ></EducationItem>
  );
};

export { Education };
