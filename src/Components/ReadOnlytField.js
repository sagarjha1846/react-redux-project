import React from "react";

function ReadOnlytField({ user }) {
  return (
    <div className="card-body">
      <h2 className="grey space">{`${user.first_name} ${user.last_name}`}</h2>
      <h3 className="space">
        <span className="grey">Email:</span> {user.email}
      </h3>
      <h3 className="space">
        <span className="grey">First Name:</span> {user.first_name}
      </h3>
      <h3 className="space">
        <span className="grey">Last Name:</span> {user.last_name}
      </h3>
    </div>
  );
}

export default ReadOnlytField;
