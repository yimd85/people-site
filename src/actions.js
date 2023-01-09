import { redirect } from "react-router-dom";

const URL = "https://people-api-wu4g.onrender.com";

export const createAction = async ({ request }) => {
    const formData = await request.formData();
console.log(formData)
    const newPerson = {
        name: formData.get("name"),
        image: formData.get("image"),
        title: formData.get("title"),
    };

    await fetch(URL + "/people", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPerson),
    });

    return redirect("/");
};
