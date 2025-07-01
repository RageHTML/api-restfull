const { where } = require("sequelize");

// Obter usuário específico
exports.getUser = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    user ? req.json(user) : res.status(404).json({ error: 'User not found' });
};

// Atualizar usuário
exports.updateUser = async (req, res) => {
    const [update] = await User.update(req.body, {
        where: { id: req.params.id }
    });
    update ? res.json(await User.findByPk(req.params.id))
           : res.status(404).json({ error: 'User not found' });
};

// Deletar usuário
exports.deleteUser = async (req,res) => {
    const deleted = await User.destroy({ where: { id: req.params.id } });
    deleted ? res.json({ message: 'User deleted' })
            : res.status(404).json({ error: 'User not found' });
};