import './Table.css'


function Table({title}){
    return(
    <div className='table-container'>
    <p className="table-container-heading">{title}</p>
    <table className="Dashboard-table">
    <tr>
    <th>#</th>
<th>Address</th>
<th>State</th>
<th>Date</th>
</tr>
<tr>
<td>1</td>
<td>133 W Portland St, Phoenix, AZ 85003, USA</td>
<td>Arizona</td>
<td>8th Jul, 2022</td>
</tr>
<tr>
<td>2</td>
<td>133 W Portland St, Phoenix, AZ 85003, USA</td>
<td>Arizona</td>
<td>8th Jul, 2022</td>
</tr>
<tr>
<td>3</td>
<td>133 W Portland St, Phoenix, AZ 85003, USA</td>
<td>Arizona</td>
<td>8th Jul, 2022</td>
</tr>
<tr>
<td>4</td>
<td>133 W Portland St, Phoenix, AZ 85003, USA</td>
<td>Arizona</td>
<td>8th Jul, 2022</td>
</tr>
<tr>
<td>5</td>
<td>133 W Portland St, Phoenix, AZ 85003, USA</td>
<td>Arizona</td>
<td>8th Jul, 2022</td>
</tr>
<tr>
<td>6</td>
<td>133 W Portland St, Phoenix, AZ 85003, USA</td>
<td>Arizona</td>
<td>8th Jul, 2022</td>
</tr>
<tr>
<td>7</td>
<td>133 W Portland St, Phoenix, AZ 85003, USA</td>
<td>Arizona</td>
<td>8th Jul, 2022</td>
</tr>
<tr>
<td>8</td>
<td>133 W Portland St, Phoenix, AZ 85003, USA</td>
<td>Arizona</td>
<td>8th Jul, 2022</td>
</tr>
</table>
</div>
    )
}

export default Table