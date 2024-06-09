import React, { createContext, useEffect, useState } from 'react';
import * as microsoftTeams from '@microsoft/teams-js';
import { Text, Image } from "@fluentui/react-components";
import { LaptopPerson48Filled } from '@fluentui/react-icons';
import AllUserComponent from "../widgets/AllUserComponent";

export const UserContext = createContext(null);

const UserComponent = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        microsoftTeams.app.initialize().then(() => {
            microsoftTeams.app.getContext().then(context => {
                setUser({
                    displayName: context.user.userPrincipalName,
                    email: context.user.userPrincipalName,
                });
            }).catch(err => {
                setError(err);
            });
        }).catch(err => {
            setError(err);
        });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="mt-2">
                        {user ? (
                            <UserContext.Provider value={user}>
                                <div className='card'>
                                    <div className="card-body">
                                        <h4>Logged in User</h4>
                                        <LaptopPerson48Filled className='float-end' />
                                        <p><strong>Name:</strong> {user.displayName}</p>
                                        <p><strong>Email:</strong> {user.email}</p>
                                    </div>
                                </div>
                            </UserContext.Provider>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Image src="no-item.png" height="200px" />
                                <Text size={700} className="center">User Not Found</Text>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mt-2">
                        <div className="card">
                            <div className="card-body">
                                <AllUserComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default UserComponent;
