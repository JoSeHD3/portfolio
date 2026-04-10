const Tag = ({content}: {content: string}) => {
    return (
    <div className="inline-block px-2 py-1 mr-2 mb-2 text-sm text-[#0DAD8D] bg-[#262626]/[.60] rounded-md">
        {content}
    </div>);
}

export { Tag };