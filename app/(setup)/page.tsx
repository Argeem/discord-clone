import { db } from "@/lib/db";
import { initailProfile } from "@/lib/initial-profile";
import { redirect } from "@clerk/nextjs/server";

const SetupPage = async () => {
    const profile = await initailProfile();

    // find server this profile are member
    const server = await db.server.findFirst({
        where: {
            member:{
                some:{
                    profileId:profile.id
                }
            }
        }
    })

    if(server){
        return redirect(`/servers/${server.id}`)
    }

    return <div>Create a Server</div>;
}
 
export default SetupPage;