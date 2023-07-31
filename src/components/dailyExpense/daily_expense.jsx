function DailyExpense() {
    return (
        <>
            <div className="col-sm-12 col-xl-12">
                <div className="bg-light rounded h-100 p-4">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">Description</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>10-Apr-2023</td>
                                <td>xyz</td>
                                <td>xyz</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>10-Apr-2023</td>
                                <td>xyz</td>
                                <td>xyz</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>10-Apr-2023</td>
                                <td>xyz</td>
                                <td>xyz</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default DailyExpense;