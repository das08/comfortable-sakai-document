import React from "react";
import { EntryUnion, MiniSakaiEntryList } from "../../comfortable-sakai-components/src/components/entryTab";
import { Settings } from "../../comfortable-sakai-components/src/features/setting/types";
import { Course } from "../../comfortable-sakai-components/src/features/course/types";
import { AssignmentEntry } from "../../comfortable-sakai-components/src/features/entity/assignment/types";

import "./comfortable-sakai.css";

type EntryWithCourse = {
    entry: EntryUnion;
    course: Course;
};

export default function App() {
    const settings = new Settings();
    const elements: Array<EntryWithCourse> = [
        {
            course: new Course("123456", "Sample", ""),
            entry: new AssignmentEntry("12", "test", 1654044495, 1654044495, false)
        }
    ];
    return (
        <MiniSakaiEntryList
            dueType="danger"
            isSubset={false}
            settings={settings}
            entriesWithCourse={elements}
            onCheck={() => {
                return null;
            }}
            onDelete={() => {
                return null;
            }}
        />
    );
}
