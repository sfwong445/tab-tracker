'use strict';
module.exports = (sequelize, DataTypes) => {
    const Bookmark = sequelize.define(
        'Bookmark',
        {
            SongId: DataTypes.INTEGER,
            UserId: DataTypes.INTEGER
        },
        {}
    );
    Bookmark.associate = function(models) {
        // associations can be defined here
        Bookmark.belongsTo(models.User);
        Bookmark.belongsTo(models.Song, { onDelete: 'CASCADE' });
    };
    return Bookmark;
};
