import {GiCancel} from 'react-icons/gi'
import {BsCheckLg} from 'react-icons/bs'

const EditRow = props => {
  const {id, onCancelEdit} = props



 

  const onClickCancelEdit = () => {
    onCancelEdit(id)
  }

  return (
    <tr>
      <td>
        <input
          type="text"
          placeholder="Username"
          name="username"
        />
      </td>
      <td>
        <input
          type="email"
          placeholder="Email"
          name="email"
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Ph Number"
          name="phone"
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Project Name"
          name="project"
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Description"
          name="Description"
        />
      </td>
      <td>
        <input type="date" name="start"  />
      </td>
      <td>
        <input type="date" name="end"  />
      </td>
      <td>
        <input
          type="text"
          name="status"
          placeholder="Status"
        />
      </td>
      <td>
        <div className="button-cont">
          <button type="submit" className="delete-button" testid="delete">
            <BsCheckLg />
          </button>
          <button type="button" className="delete-button" testid="delete">
            <GiCancel onClick={onClickCancelEdit} />
          </button>
        </div>
      </td>
    </tr>
  )
}
export default EditRow
