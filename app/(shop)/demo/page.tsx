import getProducts, { deleteData } from "@/lib/api"

export default async function DemoPage(){

    const productData=await getProducts()
    return(
        <main>
             <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border p-3">ID</th>
                            <th className="border p-3">Name</th>
                            <th className="border p-3">Age</th>
                            <th className="border p-3">Email</th>
                            <th className="border p-3">Status</th>
                            <th className="border p-3">Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {productData?.map((p) => (
                            <tr key={p._id} className="hover:bg-gray-100">
                                <td className="border p-3">{p._id}</td>
                                <td className="border p-3">{p.name}</td>
                                <td className="border p-3">{p.age}</td>
                                <td className="border p-3">{p.email}</td>
                              <td className="border p-3">{p.isActive ? "Active" : "Inactive"}</td>
                              {/* <td className="border p-3"><button onClick={deleteData(p._id)}>delete</button></td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}