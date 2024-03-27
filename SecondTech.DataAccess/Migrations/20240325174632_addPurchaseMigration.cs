using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SecondTech.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class addPurchaseMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Purchases",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    ProductId = table.Column<Guid>(type: "TEXT", nullable: false),
                    ProductName = table.Column<string>(type: "TEXT", nullable: false),
                    ProductPrice = table.Column<int>(type: "INTEGER", nullable: false),
                    UserFirstName = table.Column<string>(type: "TEXT", nullable: false),
                    UserLastName = table.Column<string>(type: "TEXT", nullable: false),
                    UserEmail = table.Column<string>(type: "TEXT", nullable: false),
                    UserPhone = table.Column<string>(type: "TEXT", nullable: false),
                    UserCity = table.Column<string>(type: "TEXT", nullable: false),
                    UserAddress = table.Column<string>(type: "TEXT", nullable: false),
                    SoldDateTime = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Purchases", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Purchases");
        }
    }
}
