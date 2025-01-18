import data from '../data.json' with { type: 'json' }
    
export const getAllStudents = (req, res) => {
    res.json({
        name: '302 Science',
        students: data
    })
}