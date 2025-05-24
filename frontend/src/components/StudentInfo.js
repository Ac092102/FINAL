import React from 'react';

function StudentInfo({ username }) {
return (
    <div className="student-info">
    <h3>Student: {username}</h3>
    <p>Answer the 10 multiple-choice geography questions.</p>
    </div>
);
}

export default StudentInfo;