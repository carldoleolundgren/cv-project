const Name = (props) => {
  return (
    <div>
      {!props.editing.name 
        ? <h1>{props.name}</h1> 
        : <label>
            Name:
            <input id='name' defaultValue={props.name}></input>
          </label> 
      }
      {!props.editing.name
        ? <button onClick={() => props.setEditing({...props.editing, name: true})}>Edit</button>
        : <button onClick={() => 
          props.saveNewData('name', document.querySelector('#name').value)}>
            Save
          </button>
      }
    </div>
  ); 
}

const Title = (props) => {  
  return (
    <div>
      {!props.editing.title 
        ? <h2>{props.title}</h2> 
        : <label>
            Job Title:
            <input id='title' defaultValue={props.title}></input>
          </label> 
      }
      {!props.editing.title
        ? <button onClick={() => props.setEditing({...props.editing, title: true})}>Edit</button>
        : <button onClick={() => 
            props.saveNewData('title', document.querySelector('#title').value)}>
              Save
          </button>
      }
    </div>
  ); 
}

const PhoneNumber = (props) => {  
  return (
    <div>
      {!props.editing.phone 
        ? <p>{props.phone}</p> 
        : <label>
            Phone Number:
            <input id='phone' defaultValue={props.phone}></input>
          </label> 
      }
      {!props.editing.phone
        ? <button onClick={() => props.setEditing({...props.editing, phone: true})}>Edit</button>
        : <button onClick={() => 
            props.saveNewData('phone', document.querySelector('#phone').value)}>
              Save
          </button>
      }
    </div>
  );
}

const EmailAddress = (props) => {  
  return (
    <div>
      {!props.editing.email 
        ? <p>{props.email}</p> 
        : <label>
            Email address:
            <input id='email' defaultValue={props.email}></input>
          </label> 
      }
      {!props.editing.email
        ? <button onClick={() => props.setEditing({...props.editing, email: true})}>Edit</button>
        : <button onClick={() => 
            props.saveNewData('email', document.querySelector('#email').value)}>
              Save
          </button>
      }
    </div>
  );
}

const HeaderInput = (props) => {
  function saveNewData(editKey, newValue) {
    props.setEditing({...props.editing, [editKey]: false});
    props.saveEdits(editKey, newValue);
  }
  
  return (
    <div>
      <Name 
        name={props.resumeData.name} 
        editing={props.editing}
        setEditing={props.setEditing}
        saveNewData={saveNewData}/>
      <Title 
        title={props.resumeData.title}
        editing={props.editing}
        setEditing={props.setEditing}
        saveNewData={saveNewData}/>
      <PhoneNumber 
        phone={props.resumeData.phone}
        editing={props.editing}
        setEditing={props.setEditing}
        saveNewData={saveNewData}/>
      <EmailAddress 
        email={props.resumeData.email}
        editing={props.editing}
        setEditing={props.setEditing}
        saveNewData={saveNewData}/>
    </div>
  );
}

export default HeaderInput;