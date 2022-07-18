import './DashboardCard.css'

function DashboardCard({title,counter}){
      return(
            <div className='minicard'>
                <div className='counter'>
                    <div>
                        <p className='minicard-title'>{title}</p>
                    </div>
                    <div>
                          <h3>{counter}</h3>
                    </div>
                </div>
                <div>icon</div>
            </div>
)
}

export default DashboardCard


