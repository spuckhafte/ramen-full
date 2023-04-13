import User from "../schema/User.js";

export default async (options, interaction) => {
    let yesno = options.getBoolean('yesno', false)?.valueOf();
    yesno = typeof yesno == 'undefined' ? true : yesno;

    const user = await User.findOne({ id: interaction.user.id });
    if (!user) {
        await interaction.reply({
            content: "**You are not registered.**\nDo a `mission` or `report` to continue..."
        });
        return;
    }

    user.getPings = !yesno;
    await user.save();
    
    await interaction.reply({
        content: `You **will** ${yesno ? '**not**' : ''} recieve reminders!`
    });
}