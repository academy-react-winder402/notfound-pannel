import React from 'react'
import { Table } from 'reactstrap'
import http from '../../../core/services/interceptore'
import { useQuery } from 'react-query'
const UsersList = () => {

  const getUserList =async () =>{
    const res=await http.get('/User/UserMannage?PageNumber=1&RowsOfPage=100&SortingCol=DESC&SortType=InsertDate&Query=&IsActiveUser=true')
    console.log(res);
    return res
  }
  const {data}=useQuery("getUser",getUserList)
  data&&console.log(data);
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>نام</th>
            <th>نوع کاربر</th>
            <th> id</th>
            <th>جنسیت</th>
            <th>درصد تکمیل اطلاعات</th>
            <th>ایمیل</th>              
            <th>شماره تماس</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>

            </td>

            <td>
   ngf
            </td>

            <td>
            ngf
            </td>        

            <td>
              gfhnfh
            </td>

            <td>
              nxfg
            </td>

            <td>
tyj
            </td>        

            <td>
gnzng
            </td>

            <td>
rtjhr
            </td>        

          </tr>
          <tr>
            <td>

            </td>

            <td>
   ngf
            </td>

            <td>
            ngf
            </td>        

            <td>
              gfhnfh
            </td>

            <td>
              nxfg
            </td>

            <td>
tyj
            </td>        

            <td>
gnzng
            </td>

            <td>
rtjhr
            </td>        

          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default UsersList