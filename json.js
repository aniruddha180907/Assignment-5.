async function getP()
{
    try
    {
        const response = await fetch("")
        if (response.ok)
        {
            const data = await response.json();
            console.log(data);
        }

        else
        {
            throw new Error("Failed to fetch data");
        }
    }
    catch (error)
    {
        console.error("Error:", error);
    }
    
}