// api/data.ts
export default (req: any, res: any) => {
    res.status(200).json({ message: 'This is data from the API' });
};