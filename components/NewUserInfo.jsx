import React, { useContext } from 'react';
import { NewUserInfoContext } from '@/app/about/page'; // Ensure this is correctly exported

const NewUserInfo = () => {
    const data = useContext(NewUserInfoContext);

    if (!data) {
        return <p>Loading user information...</p>; // Handle null or undefined context
    }

    return (
        <div>
            <table className="border">
                <tbody>
                    <tr>
                        <td className="mr-2"><strong>Subject</strong></td>
                        <td>{data.subject}</td>
                    </tr>
                    <tr>
                        <td className="mr-2"><strong>Subject</strong></td>
                        <td>{data.city}</td>
                    </tr>
                    <tr>
                        <td className="mr-2"><strong>Province</strong></td>
                        <td>{data.province}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default NewUserInfo;
