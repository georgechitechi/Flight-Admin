import React, { createContext, useEffect, useState } from 'react';
import * as microsoftTeams from '@microsoft/teams-js';
import { Text, Image } from "@fluentui/react-components";
import { LaptopPerson48Filled } from '@fluentui/react-icons';

export const UserContext = createContext(null);

const AllUserComponent = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        microsoftTeams.app.initialize().then(() => {
            microsoftTeams.app.getContext(context => {
                const accessToken = context && context.token;
    
                if (accessToken) {
                    fetchUsers(accessToken);
                } else {
                    setError(new Error('Access token not found in context'));
                }
            });
        }).catch(err => {
            setError(err);
        });
    }, []);

    const fetchUsers = (accessToken) => {
        const endpoint = 'https://graph.microsoft.com/v1.0/users';

        fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch users: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            setUsers(data.value);
        })
        .catch(error => {
            setError(error);
        });
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <h4>All Users</h4>
            {users.length > 0 ? (
                <UserContext.Provider value={users}>
                    <LaptopPerson48Filled className='float-end' />
                    {users.map(user => (
                        <div key={user.id}>
                            <p><strong>Name:</strong> {user.displayName}</p>
                            <p><strong>Email:</strong> {user.mail}</p>
                        </div>
                    ))}
                </UserContext.Provider>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Image src="no-item.png" height="200px" />
                    <Text size={500} className="center mt-4">No Users Found</Text>
                </div>
            )}
        </>
    );
};

export default AllUserComponent;
